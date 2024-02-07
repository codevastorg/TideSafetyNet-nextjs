import React from "react";
import Navbar from "@/layout/Navbar";
import HeroSection from "@/components/landing/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-4 mb-4">
            Welcome to Next.js version of the TideSafetyNet with Bootstrap!
          </h1>
          <button className="btn btn-primary mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
