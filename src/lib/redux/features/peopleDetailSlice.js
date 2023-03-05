import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailPeople = createAsyncThunk(
  "peopleDetail/getData",
  async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    return res;
  }
);

const initialState = {
  data: null,
  isLoading: false,
};

export const detailPeopleSlice = createSlice({
  name: "peopleDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailPeople.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailPeople.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getDetailPeople.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default detailPeopleSlice.reducer;
