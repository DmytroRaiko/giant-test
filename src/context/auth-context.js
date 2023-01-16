import {createContext, useEffect, useState} from "react";
// import { login as loginAPI } from '../services/auth/';
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

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

  const login = () => {
    setIsLoading(true);

    // loginAPI({
     //  LoginForm: {
     //    email,
     //    password,
     //  }
     // })
     //  .then(r => console.log(r))
     //  .catch(e => console.log('err:', e));
     //  axios.post('https://trackabi.com/user/login?realUtcOffset=120&timezone=Europe%2FKiev',
     //    { "LoginForm": values},
     //    {
     //      headers: {
     //        'Content-Type': 'application/json',
     //        'Accept': 'application/json',
     //        'X-requested-with': 'XMLHttpRequest',
     //        'Access-Control-Allow-Origin': '*',
     //      }
     //    })
     //    .then(function (response) {
     //      console.log('resp:', response);
     //    })
     //    .catch(function (error) {
     //      console.log('err ', error);
     //    });

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "LoginForm": {
        "email": "rajkodima@gmail.com",
        "password": "QAZWSXEDCdima2001"
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://trackabi.com/user/login?realUtcOffset=120&timezone=Europe%2FKiev", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // loginQuery({
    //   );
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
