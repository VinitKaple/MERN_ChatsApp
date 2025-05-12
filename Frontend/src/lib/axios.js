import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatsapp-hupv.onrender.com/api" : "/api",
  withCredentials: true,
});
