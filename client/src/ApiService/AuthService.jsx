import Axios from "./Axios";

export const register = async (data) =>
  await Axios.post("/auth/register", data);
export const authLogin = async (data) => await Axios.post("/auth/login", data);
