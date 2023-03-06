import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSpecies = createAsyncThunk("species/getData", async (page) => {
  const res = await axios.get(`https://swapi.dev/api/species/?page=${page}`);
  return res;
});

const initialState = {
  data: null,
  next: "",
  prev: "",
  isLoading: false,
};

export const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpecies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSpecies.fulfilled, (state, action) => {
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
      .addCase(getSpecies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default speciesSlice.reducer;
