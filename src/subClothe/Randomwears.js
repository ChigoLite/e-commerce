import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  CircularProgress,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Change } from "../features/cart/slice";
import { getProducts } from "../features/cart/slice";
import Product from "./Product";
import { FaSearch } from "react-icons/fa";
import { useGlobal } from "../context";

const Randomwears = () => {
  const [search, setSearch] = useState("");
  const { loading, searchResult } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(search));
  }, []);
  const handleSearch = () => {
    let timeoutId;
    return (e) => {
      const query = e.target.value;
      setSearch(query);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(getProducts(query));
      }, 1000);
    };
  };

  const debounce = useMemo(() => handleSearch(), []);
  const { isLogin } = useGlobal();

  return (
    <div>
      <div className="searchbox">
        <div>
          <TextField
            value={search}
            onChange={debounce}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaSearch className="searchLogo" edge="end" />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
        </div>
      </div>
      {loading ? (
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
      ) : (
        <Product isLogin={isLogin} />
      )}

      <Box
        sx={{
          display: "flex",
          height: "4rem",
          alignItem: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}>
        <h3>{searchResult}</h3>
      </Box>
    </div>
  );
};

export default Randomwears;
