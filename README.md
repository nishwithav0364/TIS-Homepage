# Tulas International School (TIS) - Homepage Redesign

A responsive redesign concept for the Tulas International School homepage, focused on campus life, clear admissions paths, and an editorial visual identity.

## Live Demo

- **Live URL:** https://tis-homepage-n3ntnutyi-nishunishwitha36-8656s-projects.vercel.app/
- **Repository:** [github.com/nishwithav0364/TIS-Homepage](https://github.com/nishwithav0364/TIS-Homepage)

## Tech Stack

- **Framework:** Next.js 16 App Router
- **UI:** React 19 and TypeScript
- **Styling:** CSS custom properties and responsive CSS
- **Motion:** Intersection Observer and CSS transitions, with reduced-motion support
- **Deployment:** GitHub Pages static export via GitHub Actions

## Standout Features

1. Responsive page layouts and navigation for mobile, tablet, and desktop.
2. Scroll-triggered section reveals and a live reading-progress indicator.
3. Animated sticky navigation, keyboard-visible focus states, and Escape-to-close mobile navigation.
4. Admissions links, school contact information, and campus details drawn from the official TIS website.
5. Official TIS campus photography served from `tis.edu.in`.

## Getting Started Locally

Requirements: Node.js 20.9 or later and npm.

```bash
git clone https://github.com/nishwithav0364/TIS-Homepage.git
cd TIS-Homepage
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Use `npm run lint` to lint the project and `npm run build` to create a production build.

## Component Architecture

```text
src/
	app/                  App Router entry point, metadata, and global styles
	components/
		animation/          Scroll reveal and reading progress behaviors
		sections/           Homepage sections and responsive site header
		ui/                 Reusable action link
```

## Brand and Assets

The redesign uses the official TIS school logo, published campaign line, school facts, admissions contact details, and campus images from [tis.edu.in](https://tis.edu.in/). The crimson and turquoise palette follows the live school homepage. Confirm image usage and brand approvals before public deployment.

## Deployment

Every push to `main` builds the static site and publishes it through GitHub Pages. The workflow attempts to enable Pages automatically. If GitHub blocks that setup, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The site is served from `/TIS-Homepage/`, so the production build applies that base path automatically.
