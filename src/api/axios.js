import axios from "axios";

const instance = axios.create({
  baseURL: "https://6273f57c3d2b510074256ac3.mockapi.io/blog",
});

export default instance;
