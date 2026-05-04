# INFM737 Capstone Project Archive

A public, growing archive of final projects from **INFM737: Information Management
Capstone Experience** at the University of Maryland College of Information.

This is the **first iteration** of the site. It is intentionally lightweight:
no build step, no database, no admin panel. Adding a new project means editing
one data file.

---

## What's in here

```
.
├── index.html              ← entry point; loads React + Babel from a CDN
├── README.md               ← you are here
├── styles/
│   └── main.css            ← all visual styling (one file, easy to skim)
├── data/
│   └── projects.js         ← the project archive lives here
└── src/
    ├── App.js              ← top-level component
    └── components/
        ├── Hero.js
        ├── SemesterNav.js
        ├── ProjectCard.js
        ├── SemesterSection.js
        ├── ProjectGallery.js
        └── Footer.js
```

Each component is one file with one job. If you've used HTML and CSS, the
React syntax (JSX) reads like HTML with `{curly braces}` for dynamic values.

---

## Running it locally

The site needs to be served over HTTP — not opened with `file://` — because
the browser fetches the component files. Pick whichever option you have:

**Option A — Python (already on macOS):**
```bash
cd "INFM 737_Website/ Capstone Experience"
python3 -m http.server 8000
```
Then visit <http://localhost:8000>.

**Option B — VS Code:** install the *Live Server* extension, right-click
`index.html`, choose **Open with Live Server**.

**Option C — Node:** `npx serve .`

---

## Hosting on GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose `Deploy from a branch`, branch `main`, folder
   `/ (root)`.
4. Save. After a minute, GitHub gives you a public URL.

No build step, nothing to configure.

---

## Adding a new project

1. Open [`data/projects.js`](data/projects.js).
2. Copy one of the existing project objects.
3. Give it a unique `id` (a short slug like `fa26-001` works well).
4. Fill in the fields. Anything you leave out (or set to `null`) is handled
   gracefully — for example, a missing `repositoryUrl` becomes a disabled
   "Repository · soon" button instead of disappearing.
5. Save the file. Refresh the page in your browser.

That's the whole flow. The semester nav, the section grouping, and the card
layout all update automatically based on what's in the file.

### Field reference

| Field             | Required | Notes                                        |
| ----------------- | -------- | -------------------------------------------- |
| `id`              | yes      | Unique string                                |
| `title`           | yes      | Project title                                |
| `semester`        | yes      | e.g. `"Spring 2026"` — used to group         |
| `year`            | yes      | Number, e.g. `2026` — used to sort           |
| `term`            | yes      | `"Spring"`, `"Summer"`, or `"Fall"`          |
| `team`            | yes      | Array of student names                       |
| `abstract`        | yes      | 2–4 sentence summary                         |
| `tags`            | no       | Short topic labels                           |
| `partner`         | no       | Client / sponsor / community partner         |
| `tools`           | no       | Tech or methods used                         |
| `presentationUrl` | no       | Slides or recorded talk                      |
| `repositoryUrl`   | no       | GitHub or other code link                    |
| `materialsUrl`    | no       | Final report, posters, or other deliverables |

### Adding a new semester

Nothing extra needed. As soon as a project has a new `semester` value (and
matching `year` + `term`), a new section appears automatically and a new chip
shows up in the sticky nav.

---

## Design choices for v1

- **React via CDN.** No `npm install`, no build pipeline. The tradeoff is a
  small in-browser compile step on first load; for an archive this size it's
  invisible. When the site grows or the team wants tooling like Vite, we
  swap the CDN scripts for a real build — the component files stay the same.
- **Data lives in one JS file.** Easy to edit, version-controlled, and
  human-readable. A second iteration could replace it with a CMS or a form,
  but the components don't need to change — they just consume `window.PROJECTS`.
- **Disabled-by-default action buttons.** Lots of capstone deliverables get
  posted weeks after the presentation. Buttons render as a muted "soon"
  state instead of being hidden, so the card layout stays consistent and
  visitors know more is coming.

---

## Planned for future iterations

- Search across titles, abstracts, partners, and tools
- Filters by semester, topic, tools, or client
- Individual project detail pages (full abstract, screenshots, posters)
- A submission form so faculty or students can add projects without editing code
- Live GitHub integration to surface stars / last commit on linked repos

The current structure is set up so each of these can be added without
restructuring the data or rewriting the cards.
