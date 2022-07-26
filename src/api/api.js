import axios from "axios";

const apisURL = {
  development: "http://localhost:4000",
  production: "url do deploy",
};

const api = axios.create({
  baseURL: apisURL[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  const loggedInUserJSON = localStorage.getItem("loggedInUser");

  const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

  if (parseLoggedInUser.token) {
    config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
  }

  return config;
});

export { api };
