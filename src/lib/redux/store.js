import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./features/peopleSlice";
import detailPeopleSlice from "./features/peopleDetailSlice";

export const store = configureStore({
  reducer: {
    people: peopleSlice,
    peopleDetail: detailPeopleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
