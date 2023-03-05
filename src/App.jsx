import { lazy, Suspense } from "react";
import "./App.css";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";

const People = lazy(() => import("./pages/People"));
const DetailPeople = lazy(() => import("./pages/Detail/PeopleDetail"));
const Films = lazy(() => import("./pages/Films"));

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
    </Routes>
  );
}

export default App;
