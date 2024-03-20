import React, { useState } from "react";
import "./Editor.css";
import { toast } from "react-toastify";
import DataList from "../AllDataTable/DataList";
import {
  agentTargetSave,
  commandTargetSave,
} from "../../ApiService/TargetService";
import { useAuth } from "../../context/AuthContext";
const EditorCom = () => {
  const [dailyTarget, setDailyTarget] = useState("");
  const [auth] = useAuth();
  const [totalAmount, settotalAmount] = useState("");

  const handleAmount = async (e) => {
    e.preventDefault();
    try {
      if (!totalAmount) {
        toast.error("Enter Total Amount");
        return;
      }
      const { data } = await agentTargetSave({
        userId: auth?.user?._id,
        amount: totalAmount,
      });
      if (data?.message) {
        toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDaily = async (e) => {
    e.preventDefault();
    try {
      if (!dailyTarget) {
        toast.error("Enter daily target");
        return;
      }
      const { data } = await commandTargetSave({
        userId: auth?.user?._id,
        target: dailyTarget,
      });
      if (data?.message) {
        toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="row row-cols-md-2 w-100 m-0">
        <div className="p-2">
          <form action="" onSubmit={handleDaily}>
            <div className="m-4 d-flex gap-3">
              <input
                onChange={(e) => setDailyTarget(e.target.value)}
                type="text"
                className=" w-100 p-2 rounded"
                style={{ outline: "none" }}
                placeholder="Enter Total"
              />
              <button className="btn btn-blue w-50">Change Daily Target</button>
            </div>
          </form>
        </div>
        <div className="p-2">
          <form action="" onSubmit={handleAmount}>
            <div className="m-4 d-flex gap-3">
              <input
                onChange={(e) => settotalAmount(e.target.value)}
                type="text"
                className=" w-100 p-2 rounded"
                style={{ outline: "none" }}
                placeholder="Enter Total"
              />
              <button className="btn btn-red w-50">Change Total Amount</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row row-cols-md-2 w-100">
        <DataList />
      </div>
    </>
  );
};

export default EditorCom;
