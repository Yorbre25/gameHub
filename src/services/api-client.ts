import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  headers: {},
  params: {
    key: "f65f0897c5d442f494d0090c70ae773d",
  },
});

export { CanceledError };
