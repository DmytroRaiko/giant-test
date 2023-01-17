import {createContext, useEffect, useState} from "react";
// import { login as loginAPI } from '../services/auth/';
// import { useMutation } from "@tanstack/react-query";
import {trackabiAPI} from "../api";

export const AuthContext = createContext({});

const initialUser = {
  name: '',
  avatar: '',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [iaAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  // const { mutate: loginQuery } = useMutation({
  //   mutationFn: (body) => loginAPI(body),
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  useEffect(() => {
    // here must be checking  login
    if (!localStorage.getItem('token')) logout()
    setIsLoading(false);
  }, [])

  const login = async (values) => {
    // setIsLoading(true);

    await trackabiAPI.post(
      '/user/login?realUtcOffset=120&timezone=Europe%2FKiev',
      {LoginForm: values},
      {
        proxy: {
          protocol: 'https',
          host: '164.70.122.6',
          port: 3128,
        },
        // mode: 'cors',
        // headers: {
        //   'sec-fetch-dest': 'empty',
        //   'sec-fetch-mode': 'cors',
        //   'sec-fetch-site': 'same-origin'
        // }
      }
    )
      .then(r => console.log(r));
  };

  const logout = () => {
    setUser(initialUser);
    setIsAuth(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{
      user, iaAuth, isLoading, login ,logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
