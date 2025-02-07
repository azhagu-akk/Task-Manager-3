import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-3-etn5.onrender.com/api/",
});
export default api;
