import axios from "axios";
const Axios = axios.create({ baseURL: "http://localhost:5500/api" });

export default Axios;
