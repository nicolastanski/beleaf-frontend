import axios from 'axios';
import 'dotenv/config';

console.log(process.env);

const api = axios.create({
  baseURL: process.env.APP_URL
});

export default api;
