import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContentLayout from "@/components/Layouts/ContentLayout/ContentLayout";
import useTitle from "@/hooks/useTitle";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "@/lib/redux/features/peopleSlice";
import Footer from "@/components/Footer/Footer";
import ListItem from "@/components/Elements/ListItem/ListItem";
import Loading from "@/components/Loading";

export default function People() {
  useTitle("Starwars Wikipedia — People");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, next, prev, isLoading } = useSelector((state) => state.people);

  const nextPage = () => {
    setPage(next);
  };

  const previousPage = () => {
    setPage(prev);
  };

  useEffect(() => {
    dispatch(getPeople(page));
  }, [page]);

  return (
    <div>
      <Navbar />
      <h1 className="title-section">PEOPLE LIST</h1>
      <ContentLayout>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => {
            const url = item.url;
            const parts = url.split("/");
            const id = parts[parts.length - 2];
            return (
              <ListItem
                key={item.name}
                name={item.name}
                url={"detail/"}
                id={id}
              />
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
    </div>
  );
}
