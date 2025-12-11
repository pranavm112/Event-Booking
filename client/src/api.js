// src/api.js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const api = axios.create({
  baseURL,
  withCredentials: true, // keep cookies if your backend uses them
});

export default api;
