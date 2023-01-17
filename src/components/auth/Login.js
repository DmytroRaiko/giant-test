import React, {useContext} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from 'formik-mui';
// import * as Yup from 'yup';
import { AuthContext } from "../../context/auth-context";

const initialFormValue = { email: 'rajkodima@gmail.com', password: 'QAZWSXEDCdima2001' };
const Login = () => {
  const { login } = useContext(AuthContext);
  const signIn = (values) => {
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
