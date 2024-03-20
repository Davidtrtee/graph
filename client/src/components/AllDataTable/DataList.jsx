import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Table from "./Table/Table";
import AddAgent from "../Editor/EditerInterFace";
import { useAuth } from "../../context/AuthContext";

const DataList = () => {
  const [auth] = useAuth();
  const [dailyAgent, setDailyAgent] = useState([]);
  const [yerlyAgent, setYearlyAgent] = useState([]);
  const [dailyCommand, setDailyCommand] = useState([]);
  const [yearlyCommand, setYearlyCommand] = useState([]);
  const dailyAgentData = useFetch(`/daily-agent/${auth?.user?._id}`);
  const yearlyAgentData = useFetch(`/yearly-agent/${auth?.user?._id}`);
  const dailyCommandData = useFetch(`/daily-command/${auth?.user?._id}`);
  const yearlyCommandData = useFetch(`/yearly-command/${auth?.user?._id}`);

  useEffect(() => {
    setDailyAgent(dailyAgentData.data);
  }, [dailyAgentData.data]);

  useEffect(() => {
    setYearlyAgent(yearlyAgentData.data);
  }, [yearlyAgentData.data]);

  useEffect(() => {
    setDailyCommand(dailyCommandData.data);
  }, [dailyCommandData.data]);

  useEffect(() => {
    setYearlyCommand(yearlyCommandData.data);
  }, [yearlyCommandData.data]);
  const reTake = () => {
    dailyAgentData?.reFetch();
    yearlyAgentData?.reFetch();
    dailyCommandData?.reFetch();
    yearlyCommandData?.reFetch();
  };
  return (
    <>
      <div className="p-4">
        <AddAgent
          onReTake={reTake}
          action="add"
          title="Add agent details"
          agent="Agent name"
          type="agent"
          sales="Sales"
          btnText="Add agent details "
        />
      </div>
      <div className="p-4">
        <AddAgent
          onReTake={reTake}
          action="add"
          title="Add command data "
          agent="Agent name"
          type="command"
          sales="Sales"
          btnText="Add command details "
        />
      </div>
      <div className="mx-auto col-md-10 ">
        <h3 className="text-white">Daily Agent List</h3>
        <Table
          reTake={reTake}
          columns={["agentname", "sales", "userId"]}
          data={dailyAgent}
          url={"/daily-agent"}
          type="agent"
        />
      </div>
      <div className="mx-auto col-md-10 ">
        <h3 className="text-white">Yearly Agent List</h3>
        <Table
          reTake={reTake}
          selectType="yearly"
          type="agent"
          columns={["agentname", "sales", "userId"]}
          data={yerlyAgent}
          url={"/yearly-agent"}
          onUserDelete
        />
      </div>
      <div className="mx-auto col-md-10 ">
        <h3 className="text-white">Daily Team List</h3>
        <Table
          type="command"
          reTake={reTake}
          columns={["country", "sales", "userId"]}
          data={dailyCommand}
          url={"/daily-command"}
        />
      </div>
      <div className="mx-auto col-md-10 ">
        <h3 className="text-white">Yearly Team List</h3>
        <Table
          selectType="yearly"
          type="command"
          reTake={reTake}
          columns={["country", "sales", "userId"]}
          data={yearlyCommand}
          url={"/yearly-command"}
        />
      </div>
    </>
  );
};

export default DataList;
