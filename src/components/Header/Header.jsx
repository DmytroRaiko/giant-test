import React, {useContext} from 'react';
import { Link as DomLink } from 'react-router-dom';
import {AppBar, Link, Avatar, Grid, Button} from '@mui/material';
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../context/auth-context";

const whiteColor = {
  color: 'white',
};

const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)

  return (
    <AppBar sx={{ width: '100%', padding: '15px 30px', background: '#18c98b' }}>
      <Grid container width="100%" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography
            color="white"
            noWrap
          >
            {null}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item marginRight="40px">
              <Grid container display="flex" height="100%" gap="20px" alignItems="center">
                <Link
                  sx={whiteColor}
                  to='/'
                  component={DomLink}
                  underline="hover"
                >
                  Home
                </Link>

                {isAuth && (
                  <Link sx={whiteColor} onClick={logout}>
                    Logout
                  </Link>
                )}
              </Grid>
            </Grid>
            <Grid item>
              {(isAuth && (
                <Avatar alt="Remy Sharp" src="" />
              )) || (
                <Button
                  component={DomLink}
                  to="login"
                  variant="contained"
                  sx={whiteColor}
                  size="small"
                >
                  Sign in
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
