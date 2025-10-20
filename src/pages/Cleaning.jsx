import React, { useState } from "react";
import '../styles/cleaning.css';

export default function Cleaning() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [columns, setColumns] = useState(""); // columns to clean/keep
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // User controls for final dataset
  const [finalRows, setFinalRows] = useState(20); // default 20 rows
  const [finalCols, setFinalCols] = useState(""); // comma-separated columns

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPreview([]);

    try {
      const formData = new FormData();
      if (file) formData.append("file", file);
      if (url) formData.append("url", url);
      if (columns) formData.append("columns_to_keep", columns);

      // Send finalRows and finalCols to backend
      formData.append("final_rows", finalRows);
      formData.append("final_cols", finalCols);

      const resp = await fetch("http://localhost:5000/api/clean_dataset", {
        method: "POST",
        body: formData,
      });

      const data = await resp.json();

      if (resp.ok) {
        setPreview(data);
      } else {
        throw new Error(data.error || "Error cleaning dataset");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Generate dataset for download based on user-selected rows and columns
  const getDownloadData = () => {
    if (!preview || preview.length === 0) return [];

    // Use backend result as-is (already filtered)
    return preview;
  };

  const downloadCSV = () => {
    const downloadData = getDownloadData();
    if (downloadData.length === 0) return;

    const headers = Object.keys(downloadData[0]);
    const csvRows = [
      headers.join(","), // header
      ...downloadData.map(row =>
        headers.map(header => `"${row[header]}"`).join(",")
      ),
    ];

    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cleaned_dataset.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cleaning-container">
      <h2>Clean & Preprocess Your Dataset</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload File (CSV/JSON): </label>
          <input type="file" accept=".csv,.json" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div>
          <label>Or Dataset URL: </label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div>
          <label>Columns to Keep (comma separated, optional): </label>
          <input type="text" value={columns} onChange={(e) => setColumns(e.target.value)} />
        </div>
        <div>
          <label>Number of rows in final dataset: </label>
          <input type="number" value={finalRows} min="1" onChange={(e) => setFinalRows(Number(e.target.value))} />
        </div>
        <div>
          <label>Columns in final dataset (comma separated, optional): </label>
          <input type="text" value={finalCols} onChange={(e) => setFinalCols(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Clean Dataset"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {preview.length > 0 && (
        <div>
          <h4>Preview of Cleaned Dataset (first 20 rows)</h4>
          <div style={{ overflowX: "auto" }}>
            <table border="1">
              <thead>
                <tr>
                  {Object.keys(preview[0]).map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.slice(0, 20).map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="download-button" onClick={downloadCSV}>
            Download CSV
          </button>
        </div>
      )}
    </div>
  );
}
