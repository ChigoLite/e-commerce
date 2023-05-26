import React from "react";
import { useSelector } from "react-redux";
import Trending from "./trending";
import Modal from "../modal";
import SubMenu from "./subMenu";
import Gallery from "./gallery";

const Home = () => {
  const { modal, submenu } = useSelector((store) => store.cart);
  return (
    <>
      <Trending />
      {submenu && <SubMenu />}

      <br />
      <hr />
      <Gallery />
    </>
  );
};

export default Home;
