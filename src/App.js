import React, { useEffect, useState } from "react";

import Home from "./Components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shoppingchart from "./Components/shoppingchart";
import { useSelector, useDispatch } from "react-redux";
import { Summation, getCharts } from "./features/cart/slice";
import Specs from "./Components/spec";
import Footer from "./Components/footer";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Faq from "./subFolder/faq";
import Sharedlayout from "./sharedlayout";
import Randomwears from "./subClothe/Randomwears";
import { getProducts } from "./features/cart/slice";
import Checkout from "./Components/successCheckout";
import { useGlobal } from "./context";

const App = () => {
  const { bags, goods, current } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { isLogin } = useGlobal();

  useEffect(() => {
    if (!isLogin) return;
    dispatch(Summation());
  }, [bags]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route
            path="/chart"
            element={
              localStorage.getItem("isLogin") ? <Shoppingchart /> : <Login />
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="success" element={<Checkout />} />
          <Route path="faq" element={<Faq />} />
          <Route path="randomwear" element={<Randomwears />} />
          <Route path="/:id" element={<Specs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
