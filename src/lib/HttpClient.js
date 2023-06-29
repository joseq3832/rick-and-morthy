import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const HttpClient = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

HttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default HttpClient;
