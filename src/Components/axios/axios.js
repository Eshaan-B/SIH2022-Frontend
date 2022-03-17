import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.195.84:8000/api",
});

export default instance;
