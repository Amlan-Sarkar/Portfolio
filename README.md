# Amlan Sarkar | Portfolio

Personal portfolio website for Amlan Sarkar, a B.Tech Computer Science student specializing in Data Science. It showcases experience, projects, skills, education, and certifications.

**Live site:** [amlan-portfolio-mochii.vercel.app](https://amlan-portfolio-mochii.vercel.app/)

## Features

- **Data-driven content:** Every section is rendered from a single file, `data.js`, so updates don't require changing the layout.
- **Dark and light themes:** Follows the system setting by default, remembers the visitor's choice, and can be toggled with the button or the `T` key.
- **Command menu:** Press `Ctrl+K` or `Cmd+K` to jump to any section, copy the email address, open the resume, or switch themes.
- **Live IST clock:** Shows the current time in India Standard Time.
- **Copy email:** One click copies the contact address, with visual feedback.
- **Project showcase:** Project cards with banners, live-deployment badges, and links to live apps and source code.
- **Tech icons:** Logos appear next to tools in projects, experience, and skills, with a text-only fallback for tools without an icon.
- **Responsive layout:** Works on desktop and mobile.

## Tech Stack

- HTML5
- CSS3 (custom properties for theming, CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks or build step)
- Font Awesome icons and Google Fonts (Geist, Inter)

## Project Structure

```
Portfolio/
├── index.html      # Page structure and section containers
├── style.css       # Design tokens, theming, and layout
├── script.js       # Rendering, theme engine, command menu, interactions
├── data.js         # All portfolio content (edit this to update the site)
└── assets/         # Images, banners, tech icons, and resume PDF
```

## Running Locally

No installation is needed. Open `index.html` in a browser, or serve the folder with a local server:

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating Content

Edit `data.js`. Each section has its own array:

- `education`, `experience`, `certifications`: Academic and professional history
- `projects`: Each entry can include `banner` (image path), `link` (live app), and `github` (source code). The live-deployment badge appears only when `link` is set.
- `skills`: Grouped skill lists for the Skills section

To add an icon for a tool, add a line to `TECH_ICONS` in `script.js` that maps the tool's exact name to a file in `assets/`.

## Deployment

The site is deployed on [Vercel](https://vercel.com). It's a static site, so Vercel deploys it directly from the repository without a build step. Every push to the main branch updates the live site.

## Contact

- Email: amlan.sarkar404@gmail.com
- LinkedIn: [linkedin.com/in/amlansarkar-](https://www.linkedin.com/in/amlansarkar-)
- GitHub: [github.com/Amlan-Sarkar](https://github.com/Amlan-Sarkar)

## License

Copyright (c) 2026 Amlan Sarkar. All rights reserved.

The content of this site is personal and may not be reused without permission. See [LICENSE](LICENSE) for the full terms.
