import { trackabiAPI } from "../../api";

export const login = async (body) => await trackabiAPI.post('/user/login?realUtcOffset=120&timezone=Europe%2FKiev', body);

  // const placeholder = axios.create(
  //   {
  //     baseURL: 'https://jsonplaceholder.typicode.com',
  //   }
  // );
  //
  // await placeholder.get('/posts');
