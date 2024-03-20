import React, { useEffect, useState } from "react";
import EditorCom from "../components/Editor/EditorCom";
import { useNavigate } from "react-router-dom";
import CSVDownload from "../components/Downoads/CsvDwonload";
import DownloadSheet from "../components/Downoads/DownloadSheet";

const Editor = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("dailyAgentData");
  const [data, setData] = useState(key);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(key)));
  }, [key]);
  const keys = [
    "dailyAgentData",
    "dailyCommandData",
    "annualAgentData",
    "annualCommandData",
  ];
  return (
    <div>
      <div className="px-3 ">
        <button className="btn btn-green px-3 " onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <EditorCom />
      <div className="d-flex justify-content-between container pb-5">
        <DownloadSheet data={keys} />
        <div className="d-flex gap-4 ">
          <select
            name=""
            id=""
            onChange={(e) => setKey(e.target.value)}
            className="p-2  rounded"
            style={{ outline: "none", cursor: "text" }}
          >
            <option value="dailyAgentData">Daily Agent Data</option>
            <option value="dailyCommandData">Daily Teams Data</option>
            <option value="annualAgentData">Annaul Agent Data</option>
            <option value="annualCommandData"> Annaul Teams Data</option>
          </select>
          <CSVDownload csvData={data} filename={key} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
