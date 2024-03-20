import Axios from "./Axios";

export const yearlySaveAgent = async (data) =>
  await Axios.post("/yearly-agent/", data);

export const yearlyupdateAgent = async (id, data) =>
  await Axios.put(`/yearly-agent/${id}`, data);

export const yearlyDeleteAgent = async (id) =>
  await Axios.delete(`/yearly-agent/${id}`);

export const yearlyGetByIdAgent = async (id) =>
  await Axios.get(`/yearly-agent/${id}`);

export const yearlyGetAllAgent = async () => await Axios.post("/yearly-agent/");
