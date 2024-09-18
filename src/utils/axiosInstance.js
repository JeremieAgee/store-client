import axios from "axios";

const storeAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXPRESS_STORE_SERVER,
  timeout: 1000,
  headers: { "api-key": process.env.NEXT_PUBLIC_EXPRESS_STORE_API_KEY },
});

export default storeAPI;