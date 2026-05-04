/* Hero — top intro section.
   Reads nothing from data; purely presentational. */

function Hero() {
  return (
    <header className="hero">
      <div className="container hero__inner">
        <span className="eyebrow hero__eyebrow">
          INFM737 · Information Management Capstone Experience
        </span>

        <h1 className="hero__title">
          An archive of <em>graduate capstone</em> projects.
        </h1>

        <p className="hero__subtitle">
          Browse final projects from INFM737 at the College of
          Information. Each cohort applies information management, data, technology,
          research, and design methods to real-world challenges brought by community
          partners, agencies, and organizations.
        </p>
      </div>
    </header>
  );
}

window.Hero = Hero;
