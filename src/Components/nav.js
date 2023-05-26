import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  Stack,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Avatar,
  Drawer,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import { FaShoppingBasket, FaBars, FaSearchengin, FaAdn } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Theme from "../theme";
import { Change } from "../features/cart/slice";
import FadeMenu from "./tesing";
import { getCharts } from "../features/cart/slice";
import AlertDialog from "../utils";
import { useGlobal } from "../context";
const Nav = () => {
  const { current, search } = useSelector((store) => store.cart);
  const [draw, setDraw] = useState(false);
  const dispatch = useDispatch();
  const { Logout, isLogin } = useGlobal();
  useEffect(() => {
    dispatch(getCharts());
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <AppBar position="sticky">
        <Toolbar
          variant="dense"
          sx={{ height: "5rem", background: "#b6683bdc" }}>
          <div className="navCont">
            <NavLink to="/">
              <div className="logo">
                <h4>B's VENDOR </h4>
              </div>
            </NavLink>

            <div className="nav-info">
              <NavLink to="/">home</NavLink>
              <NavLink to="/faq">faq</NavLink>
              <NavLink to="/services">our services</NavLink>
              <NavLink to="/product">products</NavLink>
              <NavLink to="/feedback">feedbacks</NavLink>
              {isLogin ? (
                <button className="logout">
                  <AlertDialog Logout={Logout} />
                </button>
              ) : (
                <Link className="login" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="logocont">
            <NavLink to="/chart">
              <div>
                <Badge color="secondary" badgeContent={current}>
                  <FaShoppingBasket />
                </Badge>{" "}
              </div>
            </NavLink>
            <div className="menu-btn">
              {" "}
              <IconButton onClick={() => setDraw(true)}>
                <FaBars />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={draw} onClose={() => setDraw(false)}>
        <Box width="300px" role="presentation" sx={{ marginTop: "2rem" }}>
          <div className="logo">
            <h4>B's VENDOR </h4>
          </div>
          <br />
          <hr />
          <br />
          <div className="drawer">
            <NavLink to="/">home</NavLink>
            <NavLink to="/faq">faq</NavLink>
            <NavLink to="/services">our services</NavLink>
            <NavLink to="/product">products</NavLink>
            <NavLink to="/feedback">feedbacks</NavLink>
          </div>
          <div className="sign">
            {isLogin ? (
              <button>
                <AlertDialog Logout={Logout} />
              </button>
            ) : (
              <Link className="login" to="/login">
                Login
              </Link>
            )}
          </div>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Nav;
