import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Closetoogle } from "./features/cart/slice";
import { Alert } from "@mui/material";
const Modal = () => {
  const { modal } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(Closetoogle());
    }, 3000);
  }, [modal]);
  return (
    <div className="modaltxt">
      <Alert variant="filled" severity="success">
        Item successfully added to cart.
      </Alert>
    </div>
  );
};

export default Modal;
