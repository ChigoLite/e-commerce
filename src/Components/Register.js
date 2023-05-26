import {
  Container,
  FormControl,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  AlertTitle,
  ThemeProvider,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Register } from "../features/cart/formSlice";
import Theme from "../theme";
import {
  HandleChange1,
  HandleChange2,
  HandleChange3,
  HandleChange4,
  HandleChange5,
  HandleChange6,
} from "../features/cart/formSlice";
const Form = () => {
  const { name, password, email, number, postcode, state, error, loading } =
    useSelector((store) => store.form);
  const dispatch = useDispatch();

  const users = { name, password, email, postcode, state };
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Container>
          <Paper>
            <Typography
              sx={{ textAlign: "center", textTransform: "uppercase" }}
              variant="h4"
              component="div"
              gutterBottom>
              fill out your address for delivery.
            </Typography>
            <br />
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>{error}</strong>
                </Alert>
              </Stack>
            )}
            <br />
            <Stack
              sx={{
                display: { md: "dispay" },
                justifyContent: "center",
                alignItem: "center",
              }}
              direction="row"
              spacing={3}>
              <TextField
                value={name}
                onChange={(e) => {
                  dispatch(HandleChange1(e.target.value));
                }}
                label="Name"
                required
              />
              <TextField
                value={password}
                type="password"
                onChange={(e) => {
                  dispatch(HandleChange2(e.target.value));
                }}
                label="Password"
                required
              />
            </Stack>
            <Stack
              sx={{
                display: { md: "dispay" },
                justifyContent: "center",
                alignItem: "center",
                marginTop: 2,
              }}
              direction="row"
              spacing={3}>
              <TextField
                value={email}
                onChange={(e) => {
                  dispatch(HandleChange3(e.target.value));
                }}
                label="Email"
                type="email"
                required
              />
            </Stack>
            <Stack
              sx={{
                display: { md: "dispay" },
                justifyContent: "center",
                alignItem: "center",
                marginTop: 2,
              }}
              direction="row"
              spacing={3}>
              <TextField
                value={postcode}
                onChange={(e) => {
                  dispatch(HandleChange5(e.target.value));
                }}
                label="PostCode"
                type="number"
                required
              />
              <TextField
                value={state}
                onChange={(e) => {
                  dispatch(HandleChange6(e.target.value));
                }}
                label="State"
                required
              />
            </Stack>
            <Stack
              sx={{ marginLeft: 3, marginTop: 2 }}
              spacing={2}
              direction="row">
              <FormControl>
                <FormLabel id="radio">Gender</FormLabel>
                <RadioGroup aria-labelledby="radio" row>
                  <FormControlLabel
                    size="small"
                    control={<Radio />}
                    label="male"
                    value="male"
                  />
                  <FormControlLabel
                    size="small"
                    control={<Radio />}
                    label="female"
                    value="female"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            <Stack
              sx={{ marginLeft: 3, marginTop: 2 }}
              spacing={2}
              direction="row">
              <FormControlLabel
                control={<Checkbox />}
                label=" I Accept The Terms And Condition."
              />
            </Stack>
            <hr />
            <Typography>Already have an account?</Typography>
            <Link to="/login">
              {" "}
              <Typography variant="h4">Login</Typography>
            </Link>
            <br />

            <br />
            <Button
              onClick={() => dispatch(Register(users))}
              fullWidth
              variant="contained"
              color="secondary">
              <Typography
                sx={{ textAlign: "center" }}
                variant="h4"
                component="div">
                Register
              </Typography>
            </Button>
          </Paper>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}>
            <CircularProgress color="secondary" />
          </Backdrop>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Form;
