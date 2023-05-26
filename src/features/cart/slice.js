import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  goods: [],
  total: 0,
  current: 0,
  bags: [],
  modal: false,
  submenu: false,
  // newcate: ['All', ...new Set(gadgets.map(item => item.category))],
  loading: false,
  searchResult: "",
  isLogin: false,
  error: null,
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (search, thunkApi) => {
    try {
      const resp = await axios(
        `http://localhost:5000/api/v2/product?search=${search} `
      );
      return resp.data.msg;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `something went wrong check your internet connection`
      );
    }
  }
);
export const postCharts = createAsyncThunk(
  "products/postCharts",
  async (chart, thunkApi) => {
    console.log(thunkApi);
    const { name, amount, price, image, _id: itemId } = chart;
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v2/charts/${itemId}`,
        {
          name,
          amount,
          price,
          image,
        }
      );
      thunkApi.dispatch(getCharts());
      return response.data.msg;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.msg);
    }
  }
);
export const getCharts = createAsyncThunk("products/getCharts", async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v2/allCharts`);
    return response.data.msg;
  } catch (error) {
    console.log(error);
  }
});

export const increaseAmt = createAsyncThunk(
  "product/increaseAmt",
  async (id) => {
    try {
      const resp = await axios.patch(
        `http://localhost:5000/api/v2/charts/amount/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
export const decreaseAmt = createAsyncThunk(
  "product/decreaseAmt",
  async (id) => {
    try {
      const resp = await axios.patch(
        `http://localhost:5000/api/v2/charts/amount/dec/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
// export const totalAmount = createAsyncThunk("product/totalAmount", async () => {
//   try {
//     const resp = await axios.get(
//       `http://localhost:5000/api/v2/charts/sumamount`
//     );
//     return resp.data.msg;
//   } catch (error) {
//     console.log(error);
//   }
// });
// export const totalSum = createAsyncThunk("product/totalSum", async () => {
//   try {
//     const resp = await axios.get(
//       `http://localhost:5000/api/v2/charts/sumprice`
//     );
//     return resp.data.msg;
//   } catch (error) {
//     console.log(error);
//   }
// });
export const deleteSingleChart = createAsyncThunk(
  "product/deleteSingleChart",
  async (id) => {
    try {
      const resp = await axios.delete(
        `http://localhost:5000/api/v2/charts/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteChart = createAsyncThunk("product/deleteChart", async () => {
  try {
    const resp = await axios.patch(
      `http://localhost:5000/api/v2/charts/delete`
    );
  } catch (error) {
    console.log(error);
  }
});

const Slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    Addtochart: (state, action) => {
      const id = action.payload;
      const selectedBag = state.bags.find((item) => item._id === id);
      const selectedGood = state.goods.find((prod) => prod._id === id);

      if (selectedBag) {
        selectedBag.amount += 1;
      } else {
        const newBag = { ...selectedGood, amount: 1 };
        state.bags = [...state.bags, newBag];
        state.modal = true;
      }
    },

    Closetoogle: (state) => {
      state.modal = false;
    },
    Closesub: (state) => {
      state.submenu = false;
    },
    Increase: (state, action) => {
      const id = action.payload;
      const bag = state.bags.find((item) => item._id === id);
      bag.amount = bag.amount + 1;
    },
    Decrease: (state, action) => {
      const id = action.payload;
      const bag = state.bags.find((item) => item._id === id);
      bag.amount = bag.amount - 1;
    },
    Remove: (state, action) => {
      const id = action.payload;
      const rem = state.bags.filter((item) => item._id !== id);
      state.bags = rem;
    },
    Summation: (state) => {
      let totalitem = 0;
      let currentitem = 0;
      state.bags.forEach((num) => {
        currentitem += num.amount;
        totalitem += currentitem * num.price;
      });
      state.current = currentitem;
      state.total = totalitem;
    },
    // Filter: (state, category) => {
    // if (category.payload==='All') {
    //     state.goods = gadgets
    //     return;
    // }
    //     const newdata= gadgets.filter(newd=>newd.category===category.payload)
    //     state.goods = newdata;
    // },
    Change: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;

        state.searchResult =
          action.payload.length === 0 ? "search not found" : "";
        state.goods = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCharts.pending, (state) => {
        // state.loading = true;
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        state.bags = action.payload;
      })
      .addCase(getCharts.rejected, () => {})
      .addCase(postCharts.pending, () => {})
      .addCase(postCharts.fulfilled, (state, action) => {
        state.modal = true;
      })
      .addCase(postCharts.rejected, () => {});

    // .addCase(totalAmount.pending, () => {})
    // .addCase(totalAmount.fulfilled, (state, action) => {
    //   state.current = action.payload;
    // })
    // .addCase(totalAmount.rejected, () => {})
    // .addCase(totalSum.pending, () => {})
    // .addCase(totalSum.fulfilled, (state, action) => {
    //   state.total = action.payload;
    // })
    // .addCase(totalSum.rejected, () => {});
  },
});
export const {
  Addtochart,
  Closetoogle,
  Closesub,
  Increase,
  Decrease,
  Remove,
  Summation,
  Change,
} = Slice.actions;
export default Slice.reducer;
