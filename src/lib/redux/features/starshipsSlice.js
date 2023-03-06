import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStarships = createAsyncThunk(
  "starships/getData",
  async (page) => {
    const res = await axios.get(
      `https://swapi.dev/api/starships/?page=${page}`
    );
    return res;
  }
);

const initialState = {
  data: null,
  next: "",
  prev: "",
  isLoading: false,
};

export const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStarships.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStarships.fulfilled, (state, action) => {
        if (action.payload.data.next !== null) {
          const n = action?.payload?.data?.next;
          const fi = n.indexOf("=");
          state.next = n.slice(fi + 1);
        } else {
          state.next = action?.payload?.data?.next;
        }

        if (action.payload.data.previous !== null) {
          const n = action?.payload?.data?.previous;
          const fi = n.indexOf("=");
          state.prev = n.slice(fi + 1);
        } else {
          state.prev = action?.payload?.data?.previous;
        }
        state.data = action.payload.data.results;
        state.isLoading = false;
      })
      .addCase(getStarships.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default starshipsSlice.reducer;
