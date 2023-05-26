import {
  Avatar,
  Container,
  Typography,
  ButtonGroup,
  Button,
  ThemeProvider,
  Fab,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Theme from "../theme";
import axios from "axios";
import Stripe from "./stripe";
import {
  Increase,
  Decrease,
  Remove,
  increaseAmt,
  decreaseAmt,
  deleteSingleChart,
} from "../features/cart/slice";
import {
  AiFillDelete,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

const Shoppingchart = () => {
  const { bags, total, current } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (current < 1) {
    return (
      <>
        <div className="empty-cart">
          <h3>your cart is empty ....</h3>
          <div></div>
        </div>
      </>
    );
  }
  return (
    <ThemeProvider theme={Theme}>
      <>
        <h4 className="cart-text">
          {" "}
          review your order so far...procced to order.
        </h4>
        <hr />
        <Container sx={{ marginLeft: "1rem", marginTop: "3rem" }}>
          <hr />

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}>
            {bags.map((allp) => {
              const { name, price, amount, _id } = allp;
              return (
                <Grid item sm={4} md={3} xs={6} key={_id}>
                  <Avatar
                    src={allp?.image}
                    sx={{ width: "6rem", height: "6rem" }}
                    variant="rounded"></Avatar>
                  <h3 className="cartname">{name}</h3>
                  <p className="cartprice">${price}</p>

                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        dispatch(Increase(_id));
                        dispatch(increaseAmt(_id));
                      }}>
                      <AiFillPlusCircle className="svg-adj" />
                    </Button>
                    <Avatar variant="square">{amount}</Avatar>
                    <Button
                      onClick={() => {
                        if (amount === 1) {
                          dispatch(Remove(_id));
                          dispatch(deleteSingleChart(_id));
                          return;
                        }
                        dispatch(Decrease(_id));
                        dispatch(decreaseAmt(_id));
                      }}>
                      <AiFillMinusCircle className="svg-adj" />
                    </Button>
                  </ButtonGroup>

                  <hr />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <div className="divide"></div>
        <p className="total">
          total price: $<span>{total} </span>{" "}
        </p>
        <br />
        <br />

        <Stripe />

        <br />
        <br />
      </>
    </ThemeProvider>
  );
};

export default Shoppingchart;
