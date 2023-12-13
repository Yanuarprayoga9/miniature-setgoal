import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
let initialState = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk("/auth/register", async (userData) => {
  try {
    const res = await axios.post("http://localhost:5500/api/users/", userData);
    // localStorage.setItem("user", JSON.stringify(res.data.user));
    console.log("regist resp", res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});
export const login = createAsyncThunk("/auth/login", async (userData) => {
  try {
    const res = await axios.post("http://localhost:5500/api/users/login", userData);
    localStorage.setItem("user", JSON.stringify(res.data));
    console.log("login resp", res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      (state.user = null),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(register.fulfilled, (state) => {
        state.isLoading = true;
        state.isSuccess = true;
      }),
      builder.addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(login.fulfilled, (state,actions) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.user = actions.payload;
      }),
      builder.addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
