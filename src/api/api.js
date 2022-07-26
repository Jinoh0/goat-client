import axios from "axios";

const apisURL = {
  development: "http://localhost:4000",
  production: "url do deploy",
};

const api = axios.create({
  baseURL: apisURL[process.env.NODE_ENV],
});

export { api };
