import axios from 'axios';
axios.defaults.baseURL='http://localhost:5000/api/v2/'

axios.interceptors.request.use(function (req) {
  const token = localStorage.getItem('token');

  if (token) {
    const token  = JSON.parse(localStorage.getItem('token'));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
