import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.4.112:8081/api/v1', 
});

export default api;
