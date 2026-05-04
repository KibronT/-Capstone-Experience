/* =========================================================================
   Project data: single source of truth for the archive.

   To add a new project:
     1. Copy one of the objects below.
     2. Give it a unique `id` (e.g. "fa26-001").
     3. Fill in the fields. Any field you omit (or set to null) will be
        handled gracefully by the UI. For example, missing links render
        as a disabled "Coming soon" button instead of disappearing.
     4. Save the file. Refresh the page. Done.

   Field reference:
     id              string   required, unique
     title           string   required
     semester        string   required, e.g. "Spring 2026"   (used to group)
     year            number   required, e.g. 2026             (used to sort)
     term            string   required, "Spring" | "Summer" | "Fall"
     team            array    required, list of student names
     abstract        string   required, 2–4 sentence summary
     tags            array    optional, short topic labels
     partner         string   optional, client / sponsor / community partner
     tools           array    optional, tech / methods used
     presentationUrl string   optional, link to slides or talk
     repositoryUrl   string   optional, link to GitHub or code
     materialsUrl    string   optional, link to additional materials / report
   ========================================================================= */

window.PROJECTS = [
  /* ---------------- Spring 2026 ---------------- */
  {
    id: 'sp26-001',
    title: 'Predictive Analytics for Public Library Resource Allocation',
    semester: 'Spring 2026',
    year: 2026,
    term: 'Spring',
    team: ['Student Name One', 'Student Name Two', 'Student Name Three'],
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['Predictive Analytics', 'Civic Tech', 'Equity'],
    partner: 'Prince George’s County Memorial Library System',
    tools: ['Python', 'scikit-learn', 'Tableau', 'PostgreSQL'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: null,
  },
  {
    id: 'sp26-002',
    title: 'Equity-Centered Data Dashboard for Local Nonprofits',
    semester: 'Spring 2026',
    year: 2026,
    term: 'Spring',
    team: ['Student Name One', 'Student Name Two', 'Student Name Three', 'Student Name Four'],
    abstract:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['Data Visualization', 'Nonprofit', 'Accessibility'],
    partner: 'Greater Washington Nonprofit Coalition',
    tools: ['React', 'D3.js', 'Airtable'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: '#',
  },
  {
    id: 'sp26-003',
    title: 'Digital Archive Modernization for the Maryland State Archives',
    semester: 'Spring 2026',
    year: 2026,
    term: 'Spring',
    team: ['Student Name One', 'Student Name Two', 'Student Name Three'],
    abstract:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    tags: ['Digital Humanities', 'Metadata', 'Information Architecture'],
    partner: 'Maryland State Archives',
    tools: ['EAD', 'Dublin Core', 'Figma', 'Python'],
    presentationUrl: '#',
    repositoryUrl: null,
    materialsUrl: '#',
  },
  {
    id: 'sp26-004',
    title: 'Patient Portal Accessibility Audit Tool',
    semester: 'Spring 2026',
    year: 2026,
    term: 'Spring',
    team: ['Student Name One', 'Student Name Two'],
    abstract:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
    tags: ['Accessibility', 'Health Informatics', 'UX Research'],
    partner: 'Capital Region Health Equity Initiative',
    tools: ['Playwright', 'axe-core', 'Node.js'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: null,
  },

  /* ---------------- Fall 2025 ---------------- */
  {
    id: 'fa25-001',
    title: 'Open Data Catalog for Municipal Transparency',
    semester: 'Fall 2025',
    year: 2025,
    term: 'Fall',
    team: ['Student Name One', 'Student Name Two', 'Student Name Three'],
    abstract:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.',
    tags: ['Open Data', 'Civic Tech', 'Governance'],
    partner: 'City of Hyattsville Office of Innovation',
    tools: ['Next.js', 'CKAN', 'PostgreSQL'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: '#',
  },
  {
    id: 'fa25-002',
    title: 'Information Literacy Mobile Companion',
    semester: 'Fall 2025',
    year: 2025,
    term: 'Fall',
    team: ['Student Name One', 'Student Name Two'],
    abstract:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    tags: ['Information Literacy', 'Education', 'Mobile'],
    partner: 'UMD Libraries: Teaching & Learning',
    tools: ['React Native', 'Firebase'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: null,
  },

  /* ---------------- Spring 2025 ---------------- */
  {
    id: 'sp25-001',
    title: 'Climate Risk Information Dashboard for Coastal Communities',
    semester: 'Spring 2025',
    year: 2025,
    term: 'Spring',
    team: ['Student Name One', 'Student Name Two', 'Student Name Three'],
    abstract:
      'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.',
    tags: ['Climate', 'GIS', 'Public Communication'],
    partner: 'Eastern Shore Land Conservancy',
    tools: ['Mapbox', 'React', 'NOAA APIs'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: '#',
  },
  {
    id: 'sp25-002',
    title: 'Knowledge Graph for Cultural Heritage Collections',
    semester: 'Spring 2025',
    year: 2025,
    term: 'Spring',
    team: ['Student Name One', 'Student Name Two', 'Student Name Three'],
    abstract:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
    tags: ['Linked Data', 'Cultural Heritage', 'Archives'],
    partner: 'Mid-Atlantic Small Museums Alliance',
    tools: ['RDF', 'Neo4j', 'Vue'],
    presentationUrl: '#',
    repositoryUrl: '#',
    materialsUrl: null,
  },
];

/* Helper: group projects by semester, newest first.
   Exposed on window so other scripts can use it without imports. */
window.groupProjectsBySemester = function groupProjectsBySemester(projects) {
  const termOrder = { Fall: 0, Summer: 1, Spring: 2 };
  const groups = new Map();

  for (const p of projects) {
    if (!groups.has(p.semester)) {
      groups.set(p.semester, {
        semester: p.semester,
        year: p.year,
        term: p.term,
        slug: p.semester.toLowerCase().replace(/\s+/g, '-'),
        projects: [],
      });
    }
    groups.get(p.semester).projects.push(p);
  }

  return Array.from(groups.values()).sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return termOrder[a.term] - termOrder[b.term];
  });
};
