import Axios from "./Axios";

export const dailySavecommand = async (data) =>
  await Axios.post("/daily-command/", data);

export const dailyupdatecommand = async (id, data) =>
  await Axios.put(`/daily-command/${id}`, data);

export const dailyDeletecommand = async (id) =>
  await Axios.delete(`/daily-command/${id}`);

export const dailyGetByIdcommand = async (id) =>
  await Axios.get(`/daily-command/${id}`);

export const dailyGetAllcommand = async () =>
  await Axios.get("/daily-command/");
