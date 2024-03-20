import Axios from "./Axios";

export const yearlySaveCommand = async (data) =>
  await Axios.post("/yearly-command/", data);

export const yearlyupdateCommand = async (id, data) =>
  await Axios.put(`/yearly-command/${id}`, data);

export const yearlyDeleteCommand = async (id) =>
  await Axios.delete(`/yearly-command/${id}`);

export const yearlyGetByIdCommand = async (id) =>
  await Axios.get(`/yearly-command/${id}`);

export const yearlyGetAllCommand = async () =>
  await Axios.post("/yearly-command/");
