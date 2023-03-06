import { lazy, Suspense } from "react";
import "./App.css";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";

const People = lazy(() => import("@/pages/People"));
const DetailPeople = lazy(() => import("@/pages/Detail/PeopleDetail"));
const Films = lazy(() => import("@/pages/Films"));
const Planets = lazy(() => import("@/pages/Planets"));
const Species = lazy(() => import("@/pages/Species"));
const Starships = lazy(() => import("@/pages/Starships"));
const Vehicles = lazy(() => import("@/pages/Vehicles"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="people"
        element={
          <Suspense fallback={<>...</>}>
            <People />
          </Suspense>
        }
      />
      <Route
        path="people/detail/:id"
        element={
          <Suspense fallback={<>...</>}>
            <DetailPeople />
          </Suspense>
        }
      />
      <Route
        path="films"
        element={
          <Suspense fallback={<>...</>}>
            <Films />
          </Suspense>
        }
      />
      <Route
        path="planets"
        element={
          <Suspense fallback={<>...</>}>
            <Planets />
          </Suspense>
        }
      />
      <Route
        path="species"
        element={
          <Suspense fallback={<>...</>}>
            <Species />
          </Suspense>
        }
      />
      <Route
        path="starships"
        element={
          <Suspense fallback={<>...</>}>
            <Starships />
          </Suspense>
        }
      />
      <Route
        path="vehicles"
        element={
          <Suspense fallback={<>...</>}>
            <Vehicles />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
