import axios from 'axios';
import { trackabiDefaultURI } from '../config';

export const trackabiAPI = axios.create(
  {
    baseURL: trackabiDefaultURI,
    withCredentials: true,
    // mode: 'cors',

    // proxy: {
    //   protocol: 'https',
    //   host: '127.0.0.1',
    //   port: 9000,
    //   auth: {
    //     username: 'mikeymike',
    //     password: 'rapunz3l'
    //   }
    // },
  },
);

trackabiAPI.defaults.headers['Content-Type'] = 'application/json';
trackabiAPI.defaults.headers['Accept'] = 'application/json';
trackabiAPI.defaults.headers['X-requested-with'] = 'XMLHttpRequest';
// trackabiAPI.defaults.headers['Access-Control-Allow-Origin'] = '*';
// trackabiAPI.defaults.headers['Access-Control-Allow-Headers'] = '*';
// trackabiAPI.defaults.headers['Access-Control-Allow-Credentials'] = 'true';
// trackabiAPI.defaults.headers['Sec-Fetch-Dest'] = 'empty';
// trackabiAPI.defaults.headers['Sec-Fetch-Mode'] = 'cors';
// trackabiAPI.defaults.headers['Sec-Fetch-Site'] = 'cross-site';

trackabiAPI.interceptors.request.use((config) => {
  // config.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
