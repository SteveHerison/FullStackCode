import axios from "axios";
import { getItem } from "../Utils/storage";

const token = getItem("token");

const instanceAxiosClients = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

export default instanceAxiosClients;
