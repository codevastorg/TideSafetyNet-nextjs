import React from "react";
import Link from "next/link";
import {
  BsBoxArrowInLeft,
  BsPerson,
  BsDownload,
  BsSearch,
  BsAlarm,
} from "react-icons/bs";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <header className="header">
        <h1>Welcome to TideSafetyNet</h1>
        <p>Real-time quality controlled sea level data is available.</p>
        <nav>
          <Link href="/auth/logout" legacyBehavior>
            <a className="button w-75 m-auto mb-2">
              <BsBoxArrowInLeft className="icon" />
              Logout
            </a>
          </Link>
          <Link href="/userInfo" legacyBehavior>
            <a className="button w-75 m-auto mb-2">
              <BsPerson className="icon" />
              User Info
            </a>
          </Link>
          <Link href="./TideSafetyNet.apk" legacyBehavior>
            <a className="button w-75 m-auto mb-2">
              <BsDownload className="icon" />
              Download App
            </a>
          </Link>

          <Link href="#search" className="text-center" legacyBehavior>
            <a className="button w-75 m-auto mb-2">
              <BsSearch className="icon" />
              Search Tide Records
            </a>
          </Link>
        </nav>
      </header>
    </section>
  );
};

export default HeroSection;
