import React, {useContext} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from 'formik-mui';
// import * as Yup from 'yup';
import { AuthContext } from "../../context/auth-context";

const initialFormValue = { email: '', password: '' };
const Login = () => {
  const { login } = useContext(AuthContext);
  const signIn = (values) => {
    // console.log(values);
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

    fetch("https://trackabi.com/user/login?realUtcOffset=120&timezone=Europe%2FKiev", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    login(values);
  }

  // const schema = Yup.object().shape({
  //   email: Yup
  //     .string()
  //     .email("Please, enter email!")
  //     .required("Email is required"),
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(8, "Password is too short"),
  // });

  return (
    <div className="content-wrapper">
      <Formik
        initialValues={initialFormValue}
        onSubmit={signIn}
        // validationSchema={{}}
      >
        {({ isSubmitting }) => (
        <Form className="form login">
          <Grid container width="100%" gap="30px" flexDirection="column" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">
              Sign in
            </Typography>

            <Field
              component={TextField}
              type="text"
              name="email"
              label="E-mail"
              placeholder="E-mail"
            />
            <Field
              component={TextField}
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
            />

            <Button type="submit" disabled={isSubmitting} variant="contained" size="large">
              Sign in
            </Button>
          </Grid>
        </Form>
        )}

      </Formik>
    </div>
  );
};

export default Login;
