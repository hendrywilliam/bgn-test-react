import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPeople } from "@/lib/redux/features/peopleDetailSlice";
import Navbar from "@/components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import ContentLayout from "@/components/Layouts/ContentLayout/ContentLayout";
import Footer from "@/components/Footer/Footer";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";

export default function PeopleDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.peopleDetail);
  const res = data?.data;

  useEffect(() => {
    dispatch(getDetailPeople(id));
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <div className="detail-main-container">
          <h1>{res?.name}</h1>
          <div className="detail-main-info">
            <div>
              <h2>Eye Color</h2>
              <p>{res?.eye_color}</p>
            </div>
            <div>
              <h2>Gender</h2>
              <p>{res?.gender}</p>
            </div>
            <div>
              <h2>Hair Color</h2>
              <p>{res?.hair_color}</p>
            </div>
            <div>
              <h2>Height (cm)</h2>
              <p>{res?.height}</p>
            </div>
            <div>
              <h2>Birth Year</h2>
              <p>{res?.birth_year}</p>
            </div>
            <div>
              <h2>Mass (kg)</h2>
              <p>{res?.mass}</p>
            </div>
            <div>
              <h2>Skin Color</h2>
              <p>{res?.skin_color}</p>
            </div>
            <div>
              <h2>Films</h2>
              <p>{res?.films.length}</p>
            </div>
            <div>
              <h2>Species</h2>
              <p>
                {res?.species?.length === 0 ? "<No Data>" : res?.species.length}
              </p>
            </div>
            <div>
              <h2>Starships</h2>
              <p>
                {data?.data?.starships?.length === 0
                  ? "<No Data>"
                  : data?.data?.starships.length}
              </p>
            </div>
            <div>
              <h2>Vehicles</h2>
              <p>
                {data?.data?.vehicles?.length === 0
                  ? "<No Data>"
                  : data?.data?.vehicles.length}
              </p>
            </div>
          </div>
        </div>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
}
