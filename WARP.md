# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Johan Camilo Caicedo's professional portfolio for Paper Fox Studio, built as a modern web application showcasing design work, experience, and skills. The site features an interactive 3D experience, responsive design, and smooth animations.

## Development Commands

### Primary Commands
- `npm run dev` - Start development server (also available as `npm start`)
- `npm run build` - Build for production (includes type checking with `astro check`)
- `npm run preview` - Preview production build locally

### Astro-specific Commands
- `npx astro dev` - Direct Astro development server
- `npx astro build` - Direct Astro build
- `npx astro check` - Type checking and diagnostics
- `npx astro preview` - Preview production build

## Tech Stack & Architecture

### Core Framework
- **Astro** - Primary framework for static site generation with islands architecture
- **React** - Used for interactive components (client-side hydration)
- **TypeScript** - Type safety throughout the codebase

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **CSS** - Custom global styles in `src/styles/global.css`
- **Responsive Design** - Mobile-first approach with breakpoint-specific layouts

### Key Dependencies
- **Framer Motion** - Animation library for React components
- **Spline** - 3D interactive graphics via `@splinetool/react-spline`
- **React Hot Toast/Toastify** - Notification systems
- **Fontsource** - Self-hosted web fonts (Merriweather Sans, Work Sans, etc.)

## Project Structure

### Pages (`src/pages/`)
- `index.astro` - Landing page (under construction message)
- `camiloPortfolio.astro` - Main portfolio page with sections
- Specialty pages: `web-design.astro`, `graphic-design.astro`, `editorial-design.astro`, etc.

### Components (`src/components/`)
- **Layout Components**: `Navbar.astro`, `Footer.astro`, `Header.astro`
- **Content Components**: `Card.astro`, `Badge.astro`, `Experience.astro`
- **Interactive Components**: `ThemeToggle.jsx`, `SocialPills.jsx`, `Spline.jsx`
- **Specialized**: `BentoGridImg.jsx`, `ImageGallery.astro`, `ProjectSection.astro`

### Layouts (`src/layouts/`)
- `Layout.astro` - Main layout wrapper with SEO meta tags, background patterns
- `LayoutStudio.astro` - Alternative layout for specific pages

### Assets & Icons
- `src/assets/` - Local images and media files
- `src/icons/` - Custom SVG icon components as Astro files
- `public/` - Static assets served directly

## Key Features & Implementation Details

### Theme System
- Light/dark mode toggle implemented in `ThemeToggle.jsx`
- CSS classes: `light`/`dark` on `<html>` element
- Tailwind dark mode variants used throughout

### Navigation
- Dual navigation components: `Navbar.astro` and `Header.astro`
- Responsive mobile/desktop layouts
- User dropdown with profile animation (hover effect between static image and GIF)

### Interactive Elements
- **Spline 3D Scene**: Interactive 3D component on main portfolio page
- **Animations**: Framer Motion for smooth transitions and interactions  
- **Responsive Images**: Optimized WebP format, multiple breakpoints

### Content Architecture
- **Portfolio Areas**: Web Design, Graphic Design, Editorial Design, Photography, Personal
- **Experience Data**: Structured data arrays for work history
- **Project Sections**: Reusable components for showcasing work

### Styling Patterns
- **Color Scheme**: Custom purple (`#6a5deb`), theme-aware backgrounds
- **Typography**: Multiple font families with fallbacks
- **Grid Layouts**: CSS Grid for portfolio sections, responsive breakpoints
- **Animations**: Hover effects, transitions, and interactive states

## Development Notes

### Base Path Configuration
- Routes use `/camiloPortfolio/` base path for navigation
- Update routes consistently when adding new pages

### Asset Management
- Images optimized as WebP format
- Firebase Storage URLs for external assets
- Local assets in `src/assets/` directory

### Component Patterns
- Astro components for static content and layouts
- React components for interactive features requiring client-side JS
- Props interfaces defined for TypeScript components

### Responsive Design
- Mobile-first approach with `md:` and `lg:` breakpoints
- Conditional rendering for mobile vs desktop layouts
- Touch-friendly interactions on mobile devices

### Performance Considerations
- Astro's islands architecture minimizes JavaScript bundle
- Client-side hydration only where needed (`client:load` directive)
- Optimized images and fonts loaded efficiently

## Content Management

### Adding New Portfolio Sections
1. Create new page in `src/pages/` following existing patterns
2. Add navigation link to `Navbar.astro` and `Header.astro`
3. Create corresponding project data arrays
4. Use existing components (`ProjectSection.astro`, `Card.astro`) for consistency

### Modifying Experience Data
- Update `EXPERIENCE_DATA` array in `camiloPortfolio.astro`
- Follow existing object structure with date, title, company, description

### Theme Customization
- Modify `tailwind.config.mjs` for color schemes and fonts
- Update CSS custom properties in global styles
- Maintain dark mode variants for all custom colors