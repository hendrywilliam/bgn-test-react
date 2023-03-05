import { lazy, Suspense } from "react";
import "./App.css";
import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";

const People = lazy(() => import("./pages/People"));
const DetailPeople = lazy(() => import("./pages/Detail/PeopleDetail"));

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
    </Routes>
  );
}

export default App;
