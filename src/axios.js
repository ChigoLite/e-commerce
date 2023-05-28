import axios from "axios";
axios.defaults.baseURL = "https://e-commerce-server-h5a7.onrender.com/api/v2";

axios.interceptors.request.use(function (req) {
  const token = localStorage.getItem("token");

  if (token) {
    const token = JSON.parse(localStorage.getItem("token"));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
