# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## Project Overview

This is a complete rebuild of the portfolio site with:

- ✅ Modern build tool (Vite instead of CRA)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Clean, maintainable code structure
- ✅ Responsive design
- ✅ Proper documentation

## Next Steps

1. **Add Content:**
   - Update `src/pages/HomePage.tsx` with your introduction
   - Add projects to `src/pages/PortfolioPage.tsx`
   - Fill in `src/pages/AboutPage.tsx` with your background
   - Complete `src/pages/ContactPage.tsx` with contact form

2. **Add Assets:**
   - Place images in `src/assets/`
   - Update resume files in `src/assets/resume/`

3. **Customize Design:**
   - Modify colors in `tailwind.config.js`
   - Update fonts in `index.html` and `tailwind.config.js`
   - Adjust animations in component files

4. **Add Features:**
   - Re-implement hand gesture detection (optimized)
   - Add blog section
   - Integrate contact form backend
   - Add analytics

## Development Tips

- Use `npm run type-check` to verify TypeScript types
- Use `npm run lint` to check code quality
- Components are in `src/components/`
- Pages are in `src/pages/`
- Utilities are in `src/lib/`

## Deployment

For GitHub Pages:
```bash
npm run deploy
```

Make sure to update `vite.config.ts` base path if needed.

