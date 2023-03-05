import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import useTitle from "@/hooks/useTitle";
import Footer from "@/components/Footer/Footer";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";

export default function Home() {
  useTitle("Starwars Wikipedia — Home");

  return (
    <MainLayout>
      <Navbar />
      <MainLayout>
        <Hero />
      </MainLayout>
      <Footer />
    </MainLayout>
  );
}
