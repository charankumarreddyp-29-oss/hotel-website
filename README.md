# Kaia Cove Resort & Spa

A responsive, animated frontend website for a boutique cliffside hotel — built with modern HTML5, CSS3, and vanilla JavaScript.

**Category:** Hotel & Hospitality Website

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero banner, highlights, suite spotlight, amenities, testimonials, call-to-action |
| About | `about.html` | Resort story, values, team quote |
| Rooms & Suites | `rooms.html` | Room/rate cards with a live filter (All / Ocean / Garden / Family) |
| Gallery | `gallery.html` | Photo grid with captions, alt text, and a click-to-expand lightbox |
| Contact & Booking | `contact.html` | Contact details, map, FAQ accordion, and a validated booking enquiry form |

## Tools & Technologies

- HTML5, CSS3 (custom properties, Grid/Flexbox, media queries), vanilla JavaScript (no frameworks)
- Google Fonts: Fraunces (display), Work Sans (body), Space Mono (labels)
- Photography credited to photographers on Pexels (free-to-use license, no attribution required)

## JavaScript Features

- Mobile navigation with animated hamburger toggle
- Sticky header that condenses on scroll
- Scroll-triggered fade/rise reveal animations (`IntersectionObserver`)
- Room type filter on the Rooms & Suites page
- Auto-rotating testimonial carousel with manual dot navigation
- Gallery lightbox with keyboard (Esc / ← / →) and click navigation
- FAQ accordion on the Contact page
- Booking form validation (required fields, email/phone pattern checks, check-out-after-check-in date logic) with inline error messages and a success toast

## SEO

- Unique `<title>` on every page
- Unique meta description and meta keywords on every page
- One `<h1>` per page, `<h2>`/`<h3>` used for sections
- Descriptive alt text on every image
- Clean, simple file names: `index.html`, `about.html`, `rooms.html`, `gallery.html`, `contact.html`
- Internal links across nav, footer, and in-page call-to-actions

## Responsive Design

Layouts use CSS Grid and Flexbox with breakpoints at 1024px, 768px and 480px, covering desktop, tablet and mobile. The navigation collapses into a slide-in mobile menu below 768px.

## Folder Structure

```
kaia-cove/
├── index.html
├── about.html
├── rooms.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Getting Started

This is a static site with no build step or dependencies.

1. Clone or download the project.
2. Open `index.html` in a browser, or serve the folder with any static file server.

```bash
# Example using a simple local server
npx serve .
```

## Deployment

The site can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.). Leave the build command empty and set the publish directory to the project root.
