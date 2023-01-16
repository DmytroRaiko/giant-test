import axios from 'axios';
import { trackabiDefaultURI } from '../config';

export const trackabiAPI = axios.create(
  {
    baseURL: trackabiDefaultURI,
  },
);

trackabiAPI.defaults.headers['Content-Type'] = 'application/json';
trackabiAPI.defaults.headers['Accept'] = 'application/json';
trackabiAPI.defaults.headers['X-requested-with'] = 'XMLHttpRequest';

// trackabiAPI.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// });
