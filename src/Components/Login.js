import {
  Container,
  Paper,
  Stack,
  Box,
  TextField,
  Typography,
  Button,
  Alert,
  AlertTitle,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useGlobal } from "../context";
import Theme from "../theme";

const Login = () => {
  const { Login, loginErr, password, setPassword, email, setEmail } =
    useGlobal();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Container>
          <Paper>
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: 4,
              }}>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                required
              />
              <br />
              <TextField
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                required
              />
            </Box>
            {loginErr && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>{loginErr}</strong>
                </Alert>
              </Stack>
            )}
            <br />
            <Button
              onClick={(e) => Login(e)}
              variant="contained"
              color="secondary">
              <Typography sx={{ textAlign: "center" }} variant="h4">
                Login
              </Typography>
            </Button>
            <br />
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <Typography>Don't have an acount?</Typography>
              <Link to="/register" className="registerTxt">
                Register
              </Link>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
