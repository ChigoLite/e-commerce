import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="successCheck">
        {/* <Stack sx={{ width: "100%" }} spacing={2}> */}
        <Alert variant="filled" severity="success">
          <Typography variant="body1">
            You Have Successfully Completed The Payment.
          </Typography>
          <Typography>Our Agent Will Contact You via Email..</Typography>
          You Are The First💙
          <Link to="/randomwear">
            <p>keep shopping</p>
          </Link>
        </Alert>

        {/* </Stack> */}
      </div>
    </>
  );
};
export default Checkout;
