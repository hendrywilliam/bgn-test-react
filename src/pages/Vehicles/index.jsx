import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import ContentLayout from "@/components/Layouts/ContentLayout/ContentLayout";
import Footer from "@/components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/Loading";
import ListItem from "@/components/Elements/ListItem/ListItem";
import { getVehicles } from "@/lib/redux/features/vehiclesSlice";

export default function Vehicles() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, next, prev, isLoading } = useSelector(
    (state) => state.vehicles
  );

  const nextPage = () => {
    setPage(next);
  };

  const previousPage = () => {
    setPage(prev);
  };

  useEffect(() => {
    dispatch(getVehicles(page));
  }, [page]);

  return (
    <MainLayout>
      <Navbar />
      <h1 className="title-section">VEHICLES LIST</h1>
      <ContentLayout>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => {
            return (
              <ListItem name={item.name} key={item.name} url={"/"} id={"#"} />
            );
          })
        )}
      </ContentLayout>
      <div className={`${isLoading ? "hidden" : "flex"} navigate-container`}>
        <div>
          <button
            disabled={prev === null ? true : false}
            onClick={() => previousPage()}
          >
            Previous
          </button>
          <button
            disabled={next === null ? true : false}
            onClick={() => nextPage()}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}
