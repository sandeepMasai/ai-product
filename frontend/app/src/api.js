import axios from "axios";

const BASE_URL = " import.meta.env.VITE_API_BASE_URL";

console.log("BASE URL:", BASE_URL);

export const getProducts = (category = "") =>
  axios.get(`${BASE_URL}/products${category ? `?category=${category}` : ""}`);

export const askAI = (query) => axios.post(`${BASE_URL}/ask`, { query });
