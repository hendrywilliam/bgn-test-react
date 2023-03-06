import { lazy, Suspense } from "react";
import "./App.css";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";
import PageLoading from "./components/PageLoading/PageLoading";

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
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <People />
          </Suspense>
        }
      />
      <Route
        path="people/detail/:id"
        element={
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <DetailPeople />
          </Suspense>
        }
      />
      <Route
        path="films"
        element={
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <Films />
          </Suspense>
        }
      />
      <Route
        path="planets"
        element={
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <Planets />
          </Suspense>
        }
      />
      <Route
        path="species"
        element={
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <Species />
          </Suspense>
        }
      />
      <Route
        path="starships"
        element={
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <Starships />
          </Suspense>
        }
      />
      <Route
        path="vehicles"
        element={
          <Suspense
            fallback={
              <>
                <PageLoading />
              </>
            }
          >
            <Vehicles />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
