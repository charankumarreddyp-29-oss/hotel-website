# Kaia Cove Resort & Spa

A responsive, animated frontend website for a boutique cliffside hotel, built for **MANTRA 2026 Summer School — Assignment 1 (Frontend Website Design, SEO, Responsiveness & Netlify Hosting)**.

**Selected Topic:** Hotel Website

## Live Links
- **GitHub Repository:** _add your repo link here after pushing_
- **Netlify Live Website:** _add your Netlify link here after deploying_

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

## Basic SEO Checklist
- Unique `<title>` on every page
- Unique meta description and meta keywords on every page
- One `<h1>` per page, `<h2>`/`<h3>` used for sections
- Descriptive alt text on every image
- Simple file names: `index.html`, `about.html`, `rooms.html`, `gallery.html`, `contact.html`
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

## Deploying: GitHub + Netlify

### 1. Push to GitHub
```bash
cd kaia-cove
git init
git add .
git commit -m "Initial commit: Kaia Cove hotel website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Deploy on Netlify
1. Go to [app.netlify.com](https://app.netlify.com) and log in (GitHub login is easiest).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and select this repository.
4. Build settings: leave **Build command** empty and **Publish directory** as the project root (`/` or blank), since this is a static site with no build step.
5. Click **Deploy site**. Netlify will give you a live URL like `https://kaia-cove.netlify.app`.
6. Copy that link and your GitHub repo link into the submission form.

### Alternative: Drag-and-drop deploy
You can also deploy without GitHub by dragging the whole project folder into [app.netlify.com/drop](https://app.netlify.com/drop).

---
Built as a student frontend project for MANTRA 2026 Summer School.
