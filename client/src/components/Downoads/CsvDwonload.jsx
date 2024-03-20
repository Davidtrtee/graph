import React from "react";

function exportToCSV(data, filename) {
  if (!Array.isArray(data)) {
    console.error("Data is not in the expected format. Expected an array.");
    return;
  }

  if (data.length === 0) {
    console.error("Data is empty. Nothing to export.");
    return;
  }

  const keys = Object.keys(data[0]);
  const dataArray = data.map((obj) => keys.map((key) => obj[key]));

  const csvContent = dataArray.map((row) => row.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);

  link.click();

  URL.revokeObjectURL(url);
  document.body.removeChild(link);
}

// Example usage:
function CsvDwonload({ csvData, filename }) {
  const handleExportClick = (data, filename) => {
    exportToCSV(data, filename + ".csv");
  };

  return (
    <div>
      <button
        className="btn btn-green fw-bold"
        onClick={() => handleExportClick(csvData, filename)}
      >
        Export to CSV
      </button>
    </div>
  );
}

export default CsvDwonload;
