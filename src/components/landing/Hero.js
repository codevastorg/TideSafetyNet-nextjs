import Link from 'next/link';
import { BsBoxArrowInLeft, BsPerson, BsDownload, BsSearch } from 'react-icons/bs';

const HeroSection = () => (
  <section className="hero-section">
    <header className='header'>
      <div className='overlay'></div>
      <h1>Welcome to TideSafetyNet</h1>
      <p>Real-time quality controlled sea level data is available for free.</p>
      <nav>
        <Link legacyBehavior href="/logout">
          <a className="button">
            <BsBoxArrowInLeft className="icon" />
            Logout
          </a>
        </Link>
        <Link legacyBehavior href="/userInfo">
          <a className="button">
            <BsPerson className="icon" />
            User Info
          </a>
        </Link>
        <Link legacyBehavior href="./TideSafetyNet.apk">
          <a className="button">
            <BsDownload className="icon" />
            Download App
          </a>
        </Link>
        <Link legacyBehavior href="#records">
          <a className="button">
            <BsSearch className="icon" />
            Search Tide Records
          </a>
        </Link>
      </nav>
    </header>
  </section>
);

export default HeroSection;
