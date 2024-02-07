import Link from 'next/link';

const HeroSection = () => (
  <section className="hero-section">
    <header className='header'>
      <div className='overlay'></div>
      <h1>Welcome to TideSafetyNet</h1>
      <p>Real-time quality controlled sea level data is available for free.</p>
      <nav>
        <Link legacyBehavior href="/logout"><a>Logout</a></Link>
        <Link legacyBehavior href="/userInfo"><a>User Info</a></Link>
        <Link legacyBehavior href="./TideSafetyNet.apk"><a>Download App</a></Link>
        <Link legacyBehavior href="#records"><a>Search Tide Records</a></Link>
      </nav>
    </header>
  </section>
);

export default HeroSection;
