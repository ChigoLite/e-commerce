import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../axios";
const initialState = {
  name: "",
  password: "",
  email: "",
  postcode: "",
  state: "",
  loading: false,
  error: "",
};

export const Register = createAsyncThunk(
  "input/Register",
  async (users, thunkApi) => {
    const { name, password, email, postcode, state } = users;
    try {
      const resp = await axios.post(`/register`, {
        name,
        password,
        email,
        postcode,
        state,
      });
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const Formslice = createSlice({
  name: "input",
  initialState,
  reducers: {
    HandleChangeAll: (state, action) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.number = "";
      state.state = "";
      state.postcode = "";
    },
    HandleChange1: (state, action) => {
      state.name = action.payload;
    },
    HandleChange2: (state, action) => {
      state.password = action.payload;
    },
    HandleChange3: (state, action) => {
      state.email = action.payload;
    },

    HandleChange5: (state, action) => {
      state.postcode = action.payload;
    },
    HandleChange6: (state, action) => {
      state.state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Register.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Register.fulfilled, (state, action) => {
        localStorage.setItem("token", JSON.stringify(action.payload.token));

        state.email = "";
        state.password = "";
        state.name = "";
        state.state = "";
        state.postcode = "";
        state.loading = false;
        window.location.pathname = "/login";
      })
      .addCase(Register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      });
  },
});
export const {
  HandleChange1,
  HandleChange2,
  HandleChange3,
  HandleChange5,
  HandleChange6,
  HandleChangeAll,
} = Formslice.actions;

export default Formslice.reducer;
