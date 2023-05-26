import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import { Addtochart } from "../features/cart/slice";
import Theme from "../theme";
import { postCharts, getCharts } from "../features/cart/slice";
import Modal from "../modal";
import { Link } from "react-router-dom";

const Product = ({ isLogin }) => {
  const { goods, modal } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // console.log(goods);
  return (
    <div>
      {modal && <Modal />}
      <div className="randomtxt">
        <h1>random wear store</h1>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}>
        <ThemeProvider theme={Theme}>
          {goods.map((item) => {
            const { _id, name, price, image, amount } = item;

            const chart = {
              name,
              price,
              image,
              amount,
              _id,
            };
            return (
              <Grid key={_id} item sm={6} md={4} xs={12}>
                <Card>
                  <CardMedia>
                    <img src={image} alt="beach" className="img" />
                  </CardMedia>
                  <CardContent>
                    <h5 className="name">{name}</h5>
                    <p className="price">${price}</p>
                  </CardContent>
                  <CardActions>
                    {isLogin ? (
                      <Button
                        className="btn"
                        variant="contained"
                        onClick={() => {
                          dispatch(Addtochart(_id));
                          dispatch(postCharts(chart));
                          dispatch(getCharts());
                        }}>
                        <Typography variant="button">Add to chart</Typography>
                      </Button>
                    ) : null}
                    <Button color="secondary" variant="contained">
                      <Link className="spec" to={`/${_id}`}>
                        {" "}
                        <Typography variant="button">Spec</Typography>
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </ThemeProvider>
      </Grid>
    </div>
  );
};

export default Product;
