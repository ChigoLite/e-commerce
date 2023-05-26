import React from "react";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { F } from "react-icons/fa";
const Gallery = () => {
  return (
    <div>
      <h3 className="category">Enter your Boutique</h3>

      <Link to="/randomwear">
        <div className="imgCont">
          <img src="../../closet.png" alt="beach" className="galleryImg" />
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
