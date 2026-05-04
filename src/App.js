/* App — top-level component.
   Groups projects by semester (newest first) and assembles the page. */

const { useMemo } = React;

function App() {
  const semesters = useMemo(
    () => window.groupProjectsBySemester(window.PROJECTS),
    []
  );

  return (
    <>
      <Hero />
      <SemesterNav semesters={semesters} />
      <ProjectGallery semesters={semesters} />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
