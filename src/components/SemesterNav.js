/* SemesterNav — sticky chip-row that anchor-scrolls to each semester.
   Pure presentational; receives the grouped semester list as props. */

function SemesterNav({ semesters }) {
  if (!semesters || semesters.length <= 1) return null;

  return (
    <nav className="semester-nav" aria-label="Jump to semester">
      <div className="container semester-nav__inner">
        <span className="semester-nav__label">Semesters</span>
        {semesters.map((s) => (
          <a key={s.slug} href={`#${s.slug}`} className="semester-nav__link">
            {s.semester}
            <span>{String(s.projects.length).padStart(2, '0')}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

window.SemesterNav = SemesterNav;
