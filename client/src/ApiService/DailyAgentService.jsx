import Axios from "./Axios";

export const dailySaveAgent = async (data) =>
  await Axios.post("/daily-agent/", data);

export const dailyupdateAgent = async (id, data) =>
  await Axios.put(`/daily-agent/${id}`, data);

export const dailyDeleteAgent = async (id) =>
  await Axios.delete(`/daily-agent/${id}`);

export const dailyGetByIdAgent = async (id) =>
  await Axios.get(`/daily-agent/${id}`);

export const dailyGetAllAgent = async () => await Axios.get("/daily-agent/");
export const deleteActionService = async (url, id) =>
  await Axios.delete(`${url}/${id}`);
