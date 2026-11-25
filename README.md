# Atlas Global Trade

A modern B2B international trade and product catalog web application built with **TypeScript** and **Vite**. Designed to showcase export/import product lines, streamline buyer inquiries, and deliver fast, SEO-ready static performance.

## Tech Stack

- **Frontend:** TypeScript, HTML5, CSS3
- **Build Tool:** Vite
- **Inquiry & Messaging:** EmailJS + Zoho Mail integration
- **SEO & Discovery:** XML Sitemap (`public/sitemap.xml`)
- **CI/CD & Hosting:** GitHub Actions automated deployment to GitHub Pages

## Project Structure

```text
├── .github/workflows/   # Automated build and GitHub Pages deployment
├── public/              # Static assets and XML sitemap
├── src/                 # Application source code, components, and mail integration
├── index.html           # Application entry point
├── tsconfig.json        # TypeScript compiler configuration
└── vite.config.ts       # Vite bundler configuration