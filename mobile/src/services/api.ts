import axios from 'axios';

const api = axios.create({
     baseURL: 'http://192.168.0.101:3031'
});

export default api;