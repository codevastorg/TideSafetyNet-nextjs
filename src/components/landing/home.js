import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/layout/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-sm-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h1
                  className="text-secondary display-2"
                  style={{ fontSize: "3.5rem", fontWeight: 500 }}
                >
                  Welcome to <br />
                  <span>TideSafetyNet</span>
                </h1>

                <h2 className="display-4 text-primary">
                  Our mission is to provide real-time ocean{" "}
                  <span className="text-warning">wave information.</span>
                </h2>
                <p className="lead">
                  <strong>We warn fishermen</strong> about high or low tides,
                  <strong>assist surfers</strong> in identifying the best days to surf,
                  and <strong>assist swimmers</strong> in identifying safe days
                  for swimming, effectively<br></br> <strong>reducing the risks of accidents. <br></br></strong>
                  Our data can also predict an <strong>incoming Tsunami.</strong>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-5">
            <Link href="/auth/signin" passHref legacyBehavior>
              <a
                className="btn btn-outline-primary"
                style={{
                  margin: "10px",
                  borderRadius: "30px",
                  padding: "10px 30px",
                }}
              >
                Get started
                <i className="bi-chevron-right small ms-1"></i>
              </a>
            </Link>
          </div>

          <div className="position-relative mb-5">
            <Image
              src="/assets/imgs/info.webp"
              alt="Ocean waves indicating high and low tides, assisting fishermen, surfers and swimmers"
              layout="responsive"
              width={1500}
              height={200}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
