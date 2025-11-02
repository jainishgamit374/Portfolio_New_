# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern React portfolio website built with Vite, featuring interactive animations and smooth scrolling. The project showcases a developer's work with advanced visual effects including custom cursor interactions, 3D elements, and smooth animations.

## Common Development Commands

### Development Server
```bash
# Start development server with hot reload
npm run dev

# Preview production build locally
npm run preview
```

### Build & Production
```bash
# Create optimized production build
npm run build

# The build output will be in the 'dist' directory
```

### Code Quality
```bash
# Run ESLint to check for code issues
npm run lint

# ESLint configuration includes React, React Hooks, and React Refresh rules
```

### Package Management
```bash
# Install all dependencies
npm install

# Add new dependencies
npm install <package-name>

# Add development dependencies
npm install -D <package-name>
```

## Architecture & Structure

### Tech Stack
- **Frontend Framework**: React 18 with Vite build tool
- **Styling**: TailwindCSS for utility-first styling
- **Animations**: 
  - GSAP for high-performance animations
  - Framer Motion for declarative animations
  - Lenis for smooth scrolling
- **3D Elements**: React Three Fiber with Drei helpers
- **Icons**: React Icons and Remixicon

### Component Architecture
The app follows a single-page application pattern with all components rendered in `App.jsx`:

1. **Layout Components**: Navbar, Footer
2. **Landing Components**: Hero (with 3D stars background), Loader
3. **Content Sections**: About, Services, Projects, Testimonials, Contact, FAQ
4. **Interactive Elements**: Custom Cursor, Marque animations
5. **Utility Components**: BorderAnim, Magnito (currently commented out)

### Key Architecture Patterns

#### Smooth Scrolling Implementation
The app uses Lenis library configured in `App.jsx` with custom easing and performance settings:
- Wheel multiplier: 1
- Duration: 1.2s
- Custom easing function for smooth deceleration

#### Custom Cursor System
Complex cursor implementation in `Cursour.jsx` featuring:
- Vector-based position tracking using external `vecteur` library
- GSAP-powered interpolation and animations
- Hover state detection with `data-hover` attributes
- Mobile device detection and disabling

#### Animation Libraries Integration
- **GSAP**: Used for custom cursor, element transforms, and ticker-based animations
- **Framer Motion**: Used for Hero section color animations and button interactions
- **React Three Fiber**: 3D stars background in Hero component

#### Asset Management
Centralized asset imports in `src/utils/index.js`:
- Tech stack SVG icons
- Profile/hero images
- Project screenshots
- Resume PDF
- Testimonial images

### Development Considerations

#### Component Structure
- All major components are in `src/Components/` directory
- Each component is self-contained with its own imports
- CSS modules used for specific styling (e.g., `Hero.module.css`)

#### Performance Optimizations
- Vite for fast development and optimized builds
- Mobile detection to disable resource-intensive cursor on smaller devices
- RequestAnimationFrame used for smooth cursor animations

#### Styling Approach
- TailwindCSS for rapid UI development
- Custom CSS modules for component-specific animations
- Responsive design considerations built into components

## File Structure Insights

```
src/
├── Components/           # All React components
│   ├── Hero.jsx         # Landing section with 3D stars
│   ├── Cursour.jsx      # Custom animated cursor
│   ├── Navbar.jsx       # Site navigation
│   └── [other sections] # Content components
├── assets/              # Static assets organized by type
│   ├── TechStack/       # Technology SVG icons
│   ├── Projectimg/      # Project screenshots
│   ├── Heroimg/         # Profile and testimonial images
│   └── Resume/          # PDF resume file
├── utils/
│   └── index.js         # Centralized asset exports
├── App.jsx              # Main app with Lenis scroll setup
└── main.jsx             # React root rendering
```

## Dependencies Notes

### Animation Libraries
- `gsap`: Core animation engine, requires license for commercial use
- `framer-motion`: React-specific animation library
- `@studio-freight/lenis`: Smooth scrolling (note: this package is now maintained as just `lenis`)
- `animejs`: Additional animation library

### 3D Graphics
- `react-three-fiber`: React bindings for Three.js
- `@react-three/drei`: Useful helpers for R3F (currently using Stars component)

### Development Tools
- Vite with React plugin for fast development
- ESLint configured for React development
- TailwindCSS with PostCSS for styling

### External Dependencies
- `vecteur`: Vector math library imported via ESM.sh CDN (consider bundling for production)

## Common Tasks

### Adding New Components
1. Create component file in `src/Components/`
2. Import and add to `App.jsx` component stack
3. Add any required assets to `src/assets/` and export from `utils/index.js`

### Updating Animations
- GSAP animations: Modify in respective component files
- Framer Motion: Used primarily in Hero component
- Lenis scroll: Configuration in `App.jsx` useEffect

### Asset Management
- Add new assets to appropriate `src/assets/` subdirectory
- Export from `src/utils/index.js` with descriptive names
- Import in components as needed

### Performance Debugging
- Check browser dev tools for animation performance
- Monitor requestAnimationFrame usage in cursor implementation
- Verify Lenis smooth scroll performance on different devices
