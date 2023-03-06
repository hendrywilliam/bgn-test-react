import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./features/peopleSlice";
import detailPeopleSlice from "./features/peopleDetailSlice";
import filmSlice from "./features/filmSlice";
import planetsSlice from "./features/planetsSlice";
import speciesSlice from "./features/speciesSlice";
import starshipsSlice from "./features/starshipsSlice";
import vehiclesSlice from "./features/vehiclesSlice";

export const store = configureStore({
  reducer: {
    people: peopleSlice,
    peopleDetail: detailPeopleSlice,
    films: filmSlice,
    planets: planetsSlice,
    species: speciesSlice,
    starships: starshipsSlice,
    vehicles: vehiclesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
