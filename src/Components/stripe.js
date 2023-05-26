import React, { useEffect, useState } from "react";
import axios from "axios";
import "../axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteChart } from "../features/cart/slice";
import Button from "@mui/material/Button";
const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const { bags } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v2/check-session",
        { bags }
      );

      if (response) {
        window.location.href = response.data.url; // Redirect the user to the Stripe checkout page
        dispatch(deleteChart());
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Button onClick={handlePayment} disabled={loading} variant="contained">
        {loading ? "Processing Payment..." : "Pay Now"}
      </Button>
      {/* <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing Payment..." : "Pay Now"}
      </button> */}
    </div>
  );
};

export default CheckoutForm;
