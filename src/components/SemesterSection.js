/* SemesterSection: one semester's heading + grid of project cards. */

function SemesterSection({ group }) {
  const count = group.projects.length;

  return (
    <section id={group.slug} className="semester-section" aria-labelledby={`${group.slug}-title`}>
      <header className="semester-section__header">
        <h2 id={`${group.slug}-title`} className="semester-section__title">
          {group.semester}
        </h2>
        <span className="semester-section__count">
          {count} {count === 1 ? 'project' : 'projects'}
        </span>
      </header>

      <div className="project-grid">
        {group.projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

window.SemesterSection = SemesterSection;
