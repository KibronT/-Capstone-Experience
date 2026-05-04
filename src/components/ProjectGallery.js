/* ProjectGallery: wraps all the semester sections into one main region. */

function ProjectGallery({ semesters }) {
  return (
    <main className="gallery">
      <div className="container">
        {semesters.map((group) => (
          <SemesterSection key={group.slug} group={group} />
        ))}
      </div>
    </main>
  );
}

window.ProjectGallery = ProjectGallery;
