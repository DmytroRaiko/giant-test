import {createContext, useEffect, useState} from "react";
import { login as loginAPI } from '../services/auth/';
import { useMutation } from "@tanstack/react-query";

export const AuthContext = createContext({});

const initialUser = {
  name: '',
  avatar: '',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [iaAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const { mutate: loginQuery } = useMutation({
    mutationFn: (body) => loginAPI(body),
    onSuccess: (data) => {
      console.log(data);
    },
  })

  useEffect(() => {
    // here must be checking  login
    if (!localStorage.getItem('token')) logout()
    setIsLoading(false);
  }, [])

  const login = (email, password) => {
    setIsLoading(true);
    loginQuery({
      LoginForm: {
        email,
        password,
      }
    })

    // if (email === 'rajkodima@gmail.com' && password === '12345678') {
    //   setUser({
    //     name: 'Dmitry',
    //     avatar: '',
    //   });
    //   setIsAuth(true);
    // }
    // setIsLoading(false)
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
