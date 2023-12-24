import axios from 'axios';

const IP = '192.168.1.5'
export const axiosInstance = axios.create({ baseURL: `http://${IP}:8000/` });