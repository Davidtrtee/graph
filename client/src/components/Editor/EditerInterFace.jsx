import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  dailySaveAgent,
  dailyupdateAgent,
} from "../../ApiService/DailyAgentService";
import {
  yearlySaveAgent,
  yearlyupdateAgent,
} from "../../ApiService/YearlyAgentService";
import {
  dailySavecommand,
  dailyupdatecommand,
} from "../../ApiService/DailyCommandService";
import {
  yearlySaveCommand,
  yearlyupdateCommand,
} from "../../ApiService/YearlyCommandService";
import { useAuth } from "../../context/AuthContext";

const AddAgent = ({
  id,
  title,
  agent,
  sales,
  type,
  btnText,
  action,
  detail,
  onReTake,
  selectType,
}) => {
  const [agentName, setAgentName] = useState(detail?.agentname);
  const [sale, setSales] = useState(detail?.sales);
  const [select, setSelect] = useState("daily");
  const [country, setCountry] = useState("Germany");
  const [auth] = useAuth();

  // save handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    //  daily agent
    if (select === "daily" && type === "agent") {
      if (!agentName || !sale) {
        toast.error("Feiled is require");
        return;
      }

      try {
        const { data } = await dailySaveAgent({
          agentname: agentName,
          sales: sale,
          userId: auth?.user._id,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
    //  yeary agent
    if (select === "annually" && type === "agent") {
      if (!agentName || !sale) {
        toast.error("Feild is require");
        return;
      }
      try {
        const { data } = await yearlySaveAgent({
          userId: auth?.user?._id,
          agentname: agentName,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
    //  daily command
    if (select === "daily" && type === "command") {
      if (!country || !sale) {
        toast.error("Feild is require");
        return;
      }
      try {
        const { data } = await dailySavecommand({
          userId: auth?.user?._id,
          country,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
          return;
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
    // yearly command
    if (select === "annually" && type === "command") {
      if (!country || !sale) {
        console.log("som");
        toast.error("Feild is require");
        return;
      }
      try {
        const { data } = await yearlySaveCommand({
          userId: auth?.user?._id,
          country,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
  };

  //  update handler
  const handleComand = async (e) => {
    e.preventDefault();
    //  update daily agent
    if (select === "daily" && type === "agent") {
      try {
        const { data } = await dailyupdateAgent(id, {
          agentname: agentName,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
    //  annaul agent
    if (
      (select === "annually" || selectType === "yearly") &&
      type === "agent"
    ) {
      try {
        const { data } = await yearlyupdateAgent(id, {
          agentname: agentName,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
    //  updatee daily command
    if (select === "daily" && type === "command") {
      try {
        const { data } = await dailyupdatecommand(id, {
          agentname: agentName,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
    //  update annual command
    if (
      (select === "annually" || selectType === "yearly") &&
      type === "command"
    ) {
      try {
        const { data } = await yearlyupdateCommand(id, {
          agentname: agentName,
          sales: sale,
        });
        if (data?.message) {
          toast.error(data?.message);
        }
        toast.success(data);
        onReTake();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something wrong...");
      }
    }
  };
  return (
    <>
      <div className="border p-3 bg-light rounded box-shadow">
        <form
          action=""
          onSubmit={action === "add" ? handleSubmit : handleComand}
        >
          <h5 className="text-center fw-bold">{title}</h5>
          <div className="m-4 mt-2 d-flex gap-3">
            {type !== "command" && (
              <input
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                type="text"
                className=" w-100 p-2 rounded"
                style={{ outline: "none" }}
                placeholder={agent}
              />
            )}
            {type === "command" && (
              <select
                onChange={(e) => setCountry(e.target.value)}
                name="commnadCountry"
                id=""
                className=" w-100 p-2 rounded"
                style={{ outline: "none" }}
              >
                <option value="Daily">Germany</option>
                <option value="Czech">Czech</option>
                <option value="Hungary">Hungary</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Croatia">Croatia</option>
                <option value="Russia">Russia</option>
                <option value="Italy">Italy</option>
              </select>
            )}
          </div>
          <div className="m-4 d-flex gap-3">
            <input
              type="text"
              className=" w-100 p-2 rounded"
              style={{ outline: "none" }}
              placeholder={sales}
              value={sale}
              onChange={(e) => setSales(e.target.value)}
            />
          </div>
          {(type === "agent" || type === "command") && (
            <div className="m-4 d-flex gap-3">
              <select
                onChange={(e) => setSelect(e.target.value)}
                name="dialyAnually"
                id=""
                className=" w-100 p-2 rounded"
                style={{ outline: "none" }}
              >
                <option value="daily">Daily</option>
                <option value="annually">Annually</option>
              </select>
            </div>
          )}
          {(type === "agentEdit" || type === "commandEdit") && (
            <div className="m-4 d-flex gap-3">
              <select
                onChange={(e) => setSelect(e.target.value)}
                name="dialyAnually"
                id=""
                className=" w-100 p-2 rounded"
                style={{ outline: "none" }}
              >
                <option value="daily">Daily</option>
                <option value="annually">Annually</option>
              </select>
            </div>
          )}
          <div className="mx-3">
            <button className="btn btn-green w-100">{btnText}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAgent;
