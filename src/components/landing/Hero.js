import React from "react";
import Link from "next/link";
import Navbar from "@/layout/Navbar";
import { getAuth } from "firebase/auth";
import { firebase_app } from "@/firebase/config";
import { useRouter } from "next/router";
import {
  BsBoxArrowInLeft,
  BsPerson,
  BsDownload,
  BsSearch,
  BsAlarm,
} from "react-icons/bs";

const HeroSection = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    const auth = getAuth(firebase_app);

    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <section className="hero-section">
      <Navbar />
      <header className="header">
        <h1>Welcome to TideSafetyNet</h1>
        <p>Real-time quality controlled sea level data is available.</p>
        <nav>
          <button onClick={handleSignOut} className="button w-75 m-auto mb-2" >
            <BsBoxArrowInLeft className="icon" />
            Logout
          </button>
          <Link href="/profile" legacyBehavior>
            <a className="button w-75 m-auto mb-2">
              <BsPerson className="icon" />
              User Info
            </a>
          </Link>

          {/* Link for downloading app is removed, as the app will be hosted in Play Store, plus this webapp will be rendered directly to the app, so no need for the link. ciao */}

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
