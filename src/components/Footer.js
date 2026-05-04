/* Footer — closing section.
   Static for v1; safe to extend with real links later. */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h3 className="footer__title">INFM737 Capstone Archive</h3>
          <p className="footer__text">
            A growing public collection of final projects from the Information
            Management Capstone Experience. New cohorts are added each semester.
          </p>
        </div>

        <div>
          <p className="footer__heading">Course</p>
          <ul className="footer__list">
            <li>INFM737 · Information Management Capstone</li>
            <li>College of Information</li>
            <li>University of Maryland</li>
          </ul>
        </div>

        <div>
          <p className="footer__heading">About this archive</p>
          <ul className="footer__list">
            <li>Projects are added at the end of each term.</li>
            <li>Links open the original team’s materials.</li>
            <li>Submissions to be enabled in a future iteration.</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} INFM737 Capstone Archive</span>
        <span>Built as an open, expanding showcase.</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
