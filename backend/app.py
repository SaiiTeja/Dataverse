import pandas as pd
import re
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/clean_dataset", methods=["POST"])
def clean_dataset():
    try:
        # Get file or URL
        file = request.files.get("file")
        url = request.form.get("url")

        # Columns to keep during cleaning
        columns_raw = request.form.get("columns_to_keep")
        columns_to_keep = [col.strip() for col in columns_raw.split(",")] if columns_raw else None

        # Number of rows in final dataset
        final_rows_raw = request.form.get("final_rows")
        final_rows = int(final_rows_raw) if final_rows_raw and final_rows_raw.isdigit() else 20
        if final_rows < 1:
            final_rows = 20

        # Final columns for downloadable dataset
        final_cols_raw = request.form.get("final_cols")
        final_cols = [col.strip() for col in final_cols_raw.split(",")] if final_cols_raw else None

        # Load dataset
        if file:
            df = pd.read_csv(file)
        elif url:
            df = pd.read_csv(url)
        else:
            return jsonify({"error": "No file or URL provided"}), 400

        # -------------------- Preprocessing --------------------
        df = df.drop_duplicates()
        df = df.dropna(how='all')  # drop rows where all elements are NaN

        # Keep only requested columns during cleaning
        if columns_to_keep:
            df = df[[col for col in columns_to_keep if col in df.columns]]

        # Fill numeric NaNs with mean
        for col in df.select_dtypes(include=['float64', 'int64']).columns:
            df[col] = df[col].fillna(df[col].mean())

        # Fill string NaNs with 'unknown'
        for col in df.select_dtypes(include='object').columns:
            df[col] = df[col].fillna('unknown')

        # Clean string columns
        for col in df.select_dtypes(include='object').columns:
            df[col] = df[col].str.strip().str.lower()
            df[col] = df[col].apply(lambda x: re.sub(r'[^a-zA-Z0-9\s]', '', x))

        # Normalize column names
        df.columns = [c.strip().lower().replace(" ", "_") for c in df.columns]

        # -------------------- Final dataset selection --------------------
        # Limit columns to final_cols if provided, otherwise keep all
        if final_cols:
            valid_cols = [col for col in final_cols if col in df.columns]
            if valid_cols:
                df = df[valid_cols]

        # Limit rows to final_rows, or maximum available
        if final_rows > len(df):
            final_rows = len(df)
        df = df.head(final_rows)

        return jsonify(df.to_dict(orient="records"))

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
