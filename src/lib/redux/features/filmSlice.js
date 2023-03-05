import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFilms = createAsyncThunk("films/getData", async () => {
  const res = await axios.get("https://swapi.dev/api/films/");
  return res;
});

const initialState = {
  data: null,
  isLoading: false,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilms.fulfilled, (state, action) => {
        state.data = action.payload.data.results;
        state.isLoading = false;
      })
      .addCase(getFilms.rejected, (state) => {
        // anggaplah tidak ada error hehe
        state.isLoading = false;
      });
  },
});

export default filmsSlice.reducer;
