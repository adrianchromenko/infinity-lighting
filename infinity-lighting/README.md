# Infinity Lighting Solutions

A modern, responsive website for Infinity Lighting Solutions - Houston's premier commercial LED lighting company.

## 🌟 Overview

This website showcases Infinity Lighting Solutions' commercial LED lighting services throughout the Greater Houston area. Built with React and Vite for optimal performance and user experience.

## 🚀 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete meta tags, structured data, and local business optimization
- **Service Pages**: Dedicated pages for each lighting solution type
- **Contact System**: Easy-to-use contact form and multiple contact methods
- **Performance**: Built with Vite for fast load times and optimal performance

## 🛠️ Tech Stack

- **React** - UI Framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation and routing
- **React Helmet Async** - SEO meta tags management
- **CSS3** - Styling with mobile-first approach

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/infinity-lighting.git
cd infinity-lighting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🌐 Services Offered

- Parking Garage Lighting
- Stairwell Lighting
- Office Building Lighting
- Warehouse Lighting
- Fountains & Landscape Lighting
- Wall Packs & Flood Lighting
- Parking Lot Lighting
- Energy Audits
- Comprehensive Lighting Proposals

## 📍 Service Area

Serving the Greater Houston area including:
- Houston
- Sugar Land
- Katy
- The Woodlands
- Richmond
- Harris County

## 📞 Contact

**Email**: mark@inflighting.com  
**Phone**: (281) 202-4625 or (318) 572-3212  
**Location**: Richmond, TX 77407

## 🎨 Design Credits

Designed by [Primary Digital Marketing](https://primarydm.com)

## 📄 License

© Infinity Lighting Solutions - All Rights Reserved

---

**Website**: [https://inflighting.com](https://inflighting.com)

## 🔎 SEO & prerendering

`npm run build` produces a fully static site, not just an app shell:

1. `vite build` builds the client bundle.
2. `vite build --ssr` builds a small server bundle of the same components.
3. `scripts/prerender.mjs` renders every route (including each `/projects/:id`) to its own
   `dist/<route>/index.html` with the page's title, description, canonical URL, Open Graph tags
   and JSON-LD already in the HTML. It also writes `dist/404.html` (noindex) and regenerates
   `sitemap.xml` from the route list in `src/routes.jsx` and the projects in `src/data/projects.js`.

Per-page tags live in each page's `<SEO ... />` (see `src/components/SEO.jsx`). Site-wide
business schema lives in `index.html`. Adding a page means adding it to `src/routes.jsx`
(both the `<Route>` and the `staticRoutes` list); new projects only need a `src/data/projects.js` entry.
