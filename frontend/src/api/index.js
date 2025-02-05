import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-3-8qiz.onrender.com",
});
export default api;
