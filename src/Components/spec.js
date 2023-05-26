import {
  Paper,
  Container,
  Typography,
  Button,
  Box,
  CircularProgress,
  colors,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { postCharts, getCharts, Addtochart } from "../features/cart/slice";
import { useGlobal } from "../context";
import axios from "axios";
import Modal from "../modal";
const Chart = () => {
  const { isLogin } = useGlobal();
  const dispatch = useDispatch();

  const [cont, setCont] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { modal } = useSelector((store) => store.cart);

  useEffect(() => {
    const req = async () => {
      const data = await axios(`http://localhost:5000/api/v2/product/${id}`);
      setCont([data.data.msg]);
      setLoading(false);
    };
    req();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "4rem",
          alignItem: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}>
        <div>
          <CircularProgress />
        </div>
      </Box>
    );
  }
  return (
    <>
      <Container>
        <Paper sx={{ marginTop: "2rem" }} elevation={6}>
          {modal && <Modal />}

          {cont.map((each) => {
            const { _id, category, description, image, name, price, size } =
              each;
            const cart = { image, name, price, size };
            return (
              <div key={_id} className="spec">
                <div className="spec-img">
                  <img src={image} alt={image} />
                </div>
                <div className="spec-title">
                  <h4>{name}</h4>
                  <h4>${price}</h4>
                  <h5> {size}</h5>
                  <p> {description}</p>
                  <br />

                  <br />
                  {isLogin ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        dispatch(Addtochart(_id));
                        dispatch(postCharts(cart));
                        dispatch(getCharts());
                      }}>
                      <Typography variant="button">Add to chart</Typography>
                    </Button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </Paper>
      </Container>
    </>
  );
};

export default Chart;
