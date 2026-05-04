/* =========================================================================
   Project data — single source of truth for the archive.

   To add a new project:
     1. Copy one of the objects below.
     2. Give it a unique `id` (e.g. "fa26-001").
     3. Fill in the fields. Any field you omit (or set to null) will be
        handled gracefully by the UI — for example, missing links render
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
    team: ['Aaliyah Brooks', 'Marcus Chen', 'Priya Natarajan'],
    abstract:
      'A forecasting tool that helps branch managers anticipate demand for materials, programs, and computer time across a regional public library system. The team paired five years of circulation data with neighborhood-level indicators to surface inequities in service delivery and recommend reallocations.',
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
    team: ['Jordan Reyes', 'Sasha Williams', 'Daniel Okafor', 'Hermon Berhane'],
    abstract:
      'A lightweight dashboard template that gives small DC-area nonprofits a way to visualize service reach without buying enterprise BI tools. The team interviewed program staff at four organizations and shipped an open template with documentation written for non-technical operators.',
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
    team: ['Emily Park', 'Theo Nguyen', 'Rosa Delgado'],
    abstract:
      'A redesign of the public-facing finding aids for a 19th-century manuscript collection, paired with a metadata crosswalk that aligns the legacy schema with Dublin Core and EAD standards. The deliverable includes a pilot interface and a migration playbook for staff.',
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
    team: ['Naomi Carter', 'Iain Whitaker'],
    abstract:
      'An automated checker that crawls a hospital patient-portal flow and reports WCAG 2.2 issues alongside plain-language remediation guidance for non-developer staff. Co-designed with patient advocates from two community clinics.',
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
    team: ['Ben Carter', 'Lila Hassan', 'Wyatt Brennan'],
    abstract:
      'A searchable catalog that consolidates scattered city datasets into a single browsing experience, with provenance, update cadence, and a feedback channel for residents. The team published a governance recommendation for ongoing dataset stewardship.',
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
    team: ['Maya Goldberg', 'Alex Tran'],
    abstract:
      'A mobile-friendly companion that walks first-year college students through evaluating sources in real time. Built around the SIFT framework, with short interactive scenarios developed in collaboration with reference librarians.',
    tags: ['Information Literacy', 'Education', 'Mobile'],
    partner: 'UMD Libraries — Teaching & Learning',
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
    team: ['Olivia Martín', 'Kwame Asante', 'Sienna Whitaker'],
    abstract:
      'An interactive map that translates federal climate-risk datasets into property-level summaries for residents of the Eastern Shore. The team prioritized plain language and offline-capable views for areas with limited connectivity.',
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
    team: ['Hana Schmidt', 'Reuben Akpan', 'Mira Lutz'],
    abstract:
      'A linked-data prototype that connects items from three small museum collections through shared people, places, and events. The team produced a SPARQL endpoint and a public-facing exploration UI grounded in archival ethics.',
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
