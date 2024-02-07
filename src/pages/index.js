import React from "react";
import Navbar from "@/layout/Navbar"; // Assuming your Navbar component is in the "@/layout" directory

const Home = () => {
  return (
    <div>
      <Navbar />
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
