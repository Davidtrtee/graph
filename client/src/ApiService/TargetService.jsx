import Axios from "./Axios";

export const commandTargetSave = async (data) =>
  await Axios.post("/target-command/", data);

export const commandTargetUpdate = async (id, data) =>
  await Axios.put(`/target-command/${id}`, data);

export const commandTargetDelete = async (id) =>
  await Axios.delete(`/target-command/${id}`);
// agents
export const agentTargetSave = async (data) =>
  await Axios.post("/target-agent/", data);

export const agentTargetUpdate = async (id, data) =>
  await Axios.put(`/target-agent/${id}`, data);

export const agentTargetDelete = async (id) =>
  await Axios.delete(`/target-agent/${id}`);
