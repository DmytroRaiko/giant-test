import axios from 'axios';
import { trackabiDefaultURI } from '../config';

export const trackabiAPI = axios.create(
  {
    baseURL: trackabiDefaultURI,
    withCredentials: true,
  },
);

trackabiAPI.defaults.headers['Content-Type'] = 'application/json';
trackabiAPI.defaults.headers['Accept'] = 'application/json';
trackabiAPI.defaults.headers['X-requested-with'] = 'XMLHttpRequest';
// trackabiAPI.defaults.headers['Host'] = 'localhost';
// trackabiAPI.defaults.headers['Origin'] = 'https://localhost:3000';
// trackabiAPI.defaults.headers['Content-Length']= 108;
trackabiAPI.interceptors.request.use((config) => {
  trackabiAPI.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
