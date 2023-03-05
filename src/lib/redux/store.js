import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./features/peopleSlice";
import detailPeopleSlice from "./features/peopleDetailSlice";
import filmSlice from "./features/filmSlice";

export const store = configureStore({
  reducer: {
    people: peopleSlice,
    peopleDetail: detailPeopleSlice,
    films: filmSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
