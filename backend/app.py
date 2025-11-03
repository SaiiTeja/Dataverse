# app.py
import re
import html as html_lib
from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# --- Helpers ---
IMAGE_EXT_RE = re.compile(r'\.(jpg|jpeg|png|gif|bmp|webp)$', re.IGNORECASE)
IMAGE_ID_RE = re.compile(r'^(image|img|photo|thumbnail|landingurl)[_\-]?\d*$', re.IGNORECASE)


def normalize_colname(c):
    return str(c).strip().lower().replace(" ", "_")


def detect_image_columns(df):
    """Detect columns likely to contain image URLs."""
    image_cols = []
    for col in df.columns:
        if not (df[col].dtype == object or pd.api.types.is_string_dtype(df[col])):
            continue

        col_lower = col.lower()
        if any(k in col_lower for k in ("image", "img", "photo", "thumbnail", "url", "landingurl")):
            image_cols.append(col)
            continue

        sample = df[col].dropna().astype(str).head(100).tolist()
        for v in sample:
            s = v.strip()
            if s.lower().startswith(("http://", "https://")) and IMAGE_EXT_RE.search(s):
                image_cols.append(col)
                break
    return image_cols


def build_preview_html(df, image_cols, max_w=160, max_h=160):
    """Render preview table with image tags for URL columns."""
    headers = [html_lib.escape(str(c)) for c in df.columns]
    rows_html = []

    for _, row in df.iterrows():
        cells = []
        for c in df.columns:
            val = row[c]
            if pd.isna(val) or val == "":
                cells.append("<td></td>")
                continue

            if c in image_cols:
                url = str(val).strip()
                if url.lower().startswith(("http://", "https://")):
                    cells.append(
                        f"<td><img src='{html_lib.escape(url)}' "
                        f"style='max-width:{max_w}px;max-height:{max_h}px;border-radius:6px;border:1px solid #ccc;' "
                        f"alt='image'/></td>"
                    )
                else:
                    cells.append(f"<td>{html_lib.escape(url)}</td>")
            else:
                cells.append(f"<td>{html_lib.escape(str(val))}</td>")
        rows_html.append("<tr>" + "".join(cells) + "</tr>")

    html = f"""
    <div style="font-family: Arial, Helvetica, sans-serif; margin:8px;">
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <thead><tr>{"".join(f"<th>{h}</th>" for h in headers)}</tr></thead>
        <tbody>{"".join(rows_html)}</tbody>
      </table>
    </div>
    """
    return html


# --- Routes ---
@app.route("/api/clean_dataset", methods=["POST"])
def clean_dataset():
    try:
        file = request.files.get("file")
        url = request.form.get("url")
        preview_flag = str(request.form.get("preview", "false")).lower() in ("1", "true", "yes")

        # Load dataset safely
        if file:
            df = pd.read_csv(file)
        elif url:
            df = pd.read_csv(url)
        else:
            return jsonify({"error": "No file or URL provided"}), 400

        # Normalize column names
        df = df.rename(columns={c: normalize_colname(c) for c in df.columns})
        df = df.drop_duplicates().dropna(how='all')

        # Replace NaN/inf safely
        df = df.replace([np.inf, -np.inf], np.nan)

        # Fill missing numeric with mean
        for col in df.select_dtypes(include=["number"]).columns:
            mean_val = df[col].mean() if not pd.isna(df[col].mean()) else 0
            df[col] = df[col].fillna(mean_val)

        # Fill missing strings with ""
        for col in df.select_dtypes(include=["object", "string"]).columns:
            df[col] = df[col].fillna("")

        # Detect image URLs (Thumbnail300KURL etc.)
        image_columns = detect_image_columns(df)
        df_head = df.head(20)

        # Convert NaN, NaT, etc. to strings to make valid JSON
        df_head = df_head.where(pd.notnull(df_head), "")

        # If preview is requested, return JSON with embedded HTML
        if preview_flag:
            preview_html = build_preview_html(df_head, image_columns)
            payload = {
                "cleaned_data": df_head.to_dict(orient="records"),
                "image_columns": image_columns,
                "preview_html": preview_html
            }
            return jsonify(payload)

        # Otherwise return JSON only (no HTML)
        return jsonify(df_head.to_dict(orient="records"))

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/preview/html", methods=["POST"])
def preview_html_endpoint():
    try:
        file = request.files.get("file")
        url = request.form.get("url")
        if file:
            df = pd.read_csv(file)
        elif url:
            df = pd.read_csv(url)
        else:
            return Response("<p>No file or URL provided</p>", status=400, mimetype="text/html")

        df = df.rename(columns={c: normalize_colname(c) for c in df.columns})
        df = df.replace([np.inf, -np.inf], np.nan).fillna("")
        image_columns = detect_image_columns(df)
        df = df.head(20)
        html = build_preview_html(df, image_columns)
        return Response(html, mimetype="text/html")
    except Exception as e:
        return Response(f"<pre>Error: {html_lib.escape(str(e))}</pre>", mimetype="text/html", status=500)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
