# Tulas International School (TIS) - Homepage Redesign

A responsive redesign concept for the Tulas International School homepage, focused on campus life, clear admissions paths, and an editorial visual identity.

## Live Demo

- **Live URL:** Pending deployment
- **Repository:** Add the GitHub repository URL after publishing

## Tech Stack

- **Framework:** Next.js 16 App Router
- **UI:** React 19 and TypeScript
- **Styling:** CSS custom properties and responsive CSS
- **Motion:** Intersection Observer and CSS transitions, with reduced-motion support
- **Deployment:** Ready for Vercel or another Next.js-compatible host

## Standout Features

1. Responsive page layouts and navigation for mobile, tablet, and desktop.
2. Scroll-triggered section reveals and a live reading-progress indicator.
3. Animated sticky navigation, keyboard-visible focus states, and Escape-to-close mobile navigation.
4. Admissions links, school contact information, and campus details drawn from the official TIS website.
5. Official TIS campus photography served from `tis.edu.in`.

## Getting Started Locally

Requirements: Node.js 20.9 or later and npm.

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
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

Import the repository into Vercel, keep the default Next.js build settings, and deploy. Add the resulting public URL to the Live Demo section above.
