import React from "react";
import * as XLSX from "xlsx";

const DownloadSheet = ({ data }) => {
  const handleDownload = (keys) => {
    var wb = XLSX.utils.book_new();
    if (Array.isArray(keys)) {
      keys.forEach(function (key) {
        const data = localStorage.getItem(key);
        if (data) {
          const jsonData = JSON.parse(data); // Parse JSON string to object
          const ws = XLSX.utils.json_to_sheet(jsonData);
          XLSX.utils.book_append_sheet(wb, ws, key);
        }
      });
    }
    var filename = "data.xlsx";
    XLSX.writeFile(wb, filename);
  };

  return (
    <div>
      <button
        className="btn btn-green fw-bold"
        onClick={() => handleDownload(data)}
      >
        Download Excel
      </button>
    </div>
  );
};

export default DownloadSheet;
