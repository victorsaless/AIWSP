import axios from "axios";

const instance = axios.create({
  baseURL: "/Api",
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
