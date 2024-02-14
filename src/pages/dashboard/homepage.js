import React from "react";
import Layout from "@/layout/Layout";
import HeroSection from "@/components/landing/Hero";
import SearchSection from "@/components/landing/SearchSection";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <SearchSection />
      </Layout>
    </div>
  );
};

export default Home;
