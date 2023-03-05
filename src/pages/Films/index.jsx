import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import ContentLayout from "@/components/Layouts/ContentLayout/ContentLayout";
import Footer from "@/components/Footer/Footer";
import ListItem from "@/components/Elements/ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "@/lib/redux/features/filmSlice";
import Loading from "@/components/Loading";

export default function Films() {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.films);
  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <div className="films-list-title">
        <h1>FILMS LIST</h1>
      </div>
      <ContentLayout>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => {
            return <ListItem name={item.title} key={item.title} />;
          })
        )}
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
}
