import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-project-87ns.onrender.com",
});

export default API;