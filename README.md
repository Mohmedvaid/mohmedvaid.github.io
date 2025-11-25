# Mohmed Vaid - Portfolio Website

A modern, interactive portfolio website showcasing professional experience, projects, and skills. Built with React, TypeScript, and a full-stack architecture optimized for both development and production deployment.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Key Features](#key-features)
- [Component Documentation](#component-documentation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Development Notes](#development-notes)

## 🎯 Overview

This portfolio website is a full-stack application that can run in two modes:
- **Development Mode**: Full-stack with Vite HMR and Express server
- **Production Mode**: Static site generation for deployment to GitHub Pages or any static host

The site features:
- Interactive animations using Framer Motion
- Custom cursor effects
- Embedded Snake game (Easter egg)
- Responsive design with dark mode support
- Professional timeline/journey visualization
- Contact dialog with obfuscated phone number
- Resume preview and download functionality

## 🏗️ Architecture

### Client-Server Architecture

```
┌─────────────────┐
│   Client (Vite) │  → React SPA with TypeScript
│   Port: 5000    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Server (Express)│  → API routes (currently minimal)
│   Port: 5000    │
└─────────────────┘
```

### Build Process

- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static build output to `dist/public/` for static hosting

### Database Schema

Currently configured with Drizzle ORM and PostgreSQL schema:
- `users` table (ready for future authentication features)
- Schema defined in `shared/schema.ts`

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI framework
- **TypeScript 5.6.3** - Type safety
- **Vite 7.1.9** - Build tool and dev server
- **Wouter 3.3.5** - Lightweight routing
- **Framer Motion 12.23.24** - Animations
- **TanStack Query 5.60.5** - Data fetching and caching
- **Tailwind CSS 4.1.14** - Styling
- **shadcn/ui** - Component library (Radix UI primitives)
- **next-themes** - Theme management (dark/light mode)
- **Lucide React** - Icons

### Backend
- **Express 4.21.2** - Web server
- **Drizzle ORM 0.39.1** - Database ORM
- **PostgreSQL** - Database (via Neon serverless)
- **Express Session** - Session management (ready for auth)
- **Passport** - Authentication framework (ready for implementation)

### Development Tools
- **tsx** - TypeScript execution
- **esbuild** - Production bundling
- **Drizzle Kit** - Database migrations

## 📁 Project Structure

```
mohmedvaid.github.io/
├── client/                 # Frontend React application
│   ├── index.html         # HTML entry point
│   ├── public/            # Static assets
│   │   └── favicon.png
│   └── src/
│       ├── App.tsx        # Main app component with routing
│       ├── main.tsx       # React entry point
│       ├── index.css      # Global styles
│       ├── components/    # React components
│       │   ├── ui/        # shadcn/ui components (50+ components)
│       │   ├── CustomCursor.tsx
│       │   ├── SnakeGame.tsx
│       │   └── ContactDialog.tsx
│       ├── pages/         # Route pages
│       │   ├── Home.tsx   # Main portfolio page
│       │   └── not-found.tsx
│       ├── hooks/         # Custom React hooks
│       │   ├── use-mobile.tsx
│       │   └── use-toast.ts
│       └── lib/           # Utilities
│           ├── queryClient.ts  # TanStack Query setup
│           └── utils.ts        # Helper functions
│
├── server/                # Backend Express application
│   ├── app.ts            # Express app setup
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data layer (currently in-memory)
│   ├── index-dev.ts      # Development server entry
│   └── index-prod.ts     # Production server entry
│
├── shared/                # Shared code between client/server
│   └── schema.ts         # Drizzle database schema
│
├── attached_assets/      # User-uploaded assets
│   ├── generated_images/
│   └── *.png, *.docx    # Resume and images
│
├── dist/                  # Build output (generated)
│   └── public/           # Static files for deployment
│
├── vite.config.ts        # Vite configuration
├── drizzle.config.ts     # Drizzle ORM configuration
├── tsconfig.json         # TypeScript configuration
├── components.json       # shadcn/ui configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies and scripts
└── DEPLOYMENT.md         # Deployment instructions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (for full-stack features) - optional for static deployment

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mohmedvaid.github.io

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database (optional for static deployment)
DATABASE_URL=postgresql://user:password@host:port/database

# Server
PORT=5000

# Replit-specific (if deploying to Replit)
REPLIT_INTERNAL_APP_DOMAIN=your-app.replit.dev
REPLIT_DEV_DOMAIN=your-app.replit.dev
```

### Development

```bash
# Start development server (client + server)
npm run dev

# Or run client only (Vite dev server)
npm run dev:client
```

The application will be available at `http://localhost:5000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

The static files will be in `dist/public/` and can be deployed to any static host.

### Type Checking

```bash
npm run check
```

### Database Migrations

```bash
# Push schema changes to database
npm run db:push
```

## ✨ Key Features

### 1. Interactive Home Page (`Home.tsx`)

The main portfolio page includes:

- **Hero Section**: Large profile image with animated text overlay
- **Journey Timeline**: Interactive timeline with clickable markers showing career progression
- **Expertise Section**: Skills organized by category (Frontend, Creative Coding, Backend)
- **About Me**: Personal interests and philosophy
- **Testimonials**: Client testimonials (currently placeholder data)
- **Projects**: Featured projects with links to live demos and GitHub repos
- **Resume Section**: Embedded resume preview with download functionality

### 2. Custom Cursor (`CustomCursor.tsx`)

- Animated custom cursor that follows mouse movement
- Changes appearance on interactive elements (buttons, links)
- Hidden on mobile devices
- Uses Framer Motion for smooth animations

### 3. Snake Game (`SnakeGame.tsx`)

- Easter egg game accessible via:
  - Floating button in bottom-right corner
  - Pressing "G" key
- Features:
  - Classic Snake gameplay
  - Touch controls for mobile
  - Keyboard controls (arrow keys)
  - Score tracking
  - Countdown timer before start
  - Game over screen with restart

### 4. Contact Dialog (`ContactDialog.tsx`)

- Email and phone contact options
- Phone number obfuscation (revealed on click to prevent scraping)
- Copy-to-clipboard functionality
- Direct mailto/tel links
- Visual feedback for copied state

### 5. Theme System

- Dark/light mode toggle
- System preference detection
- Persistent theme selection
- Smooth transitions between themes

### 6. Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized images and assets

## 📚 Component Documentation

### Core Components

#### `App.tsx`
Main application component that sets up:
- Theme provider (dark/light mode)
- Query client provider (TanStack Query)
- Tooltip provider
- Toast notifications
- Routing (Wouter)

#### `Home.tsx`
Main portfolio page component (~840 lines):
- **WavyLine**: Animated SVG background element
- **ThemeToggle**: Dark/light mode switcher
- **JourneyItem**: Timeline entry component with dialog
- **ProjectCard**: Project showcase card
- **InteractiveText**: Animated heading with hover effects

#### `CustomCursor.tsx`
Custom mouse cursor implementation:
- Outer ring with spring animation
- Inner dot that disappears on interactive elements
- Pointer detection for buttons and links
- Mobile-hidden (only desktop)

#### `SnakeGame.tsx`
Full-featured Snake game:
- Grid-based game logic (20x20)
- Collision detection (walls, self)
- Food generation
- Score system
- Touch and keyboard controls
- Countdown and game over states

#### `ContactDialog.tsx`
Contact information dialog:
- Email display with copy functionality
- Phone number with reveal mechanism
- Copy-to-clipboard with visual feedback
- Direct action buttons (email/call)

### UI Components (shadcn/ui)

The project uses 50+ pre-built components from shadcn/ui, including:
- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Navigation, Menus, Tooltips
- Charts, Tables, Calendars
- And many more...

All components are located in `client/src/components/ui/` and are fully customizable.

## ⚙️ Configuration

### Vite Configuration (`vite.config.ts`)

Key features:
- React plugin with Fast Refresh
- Tailwind CSS integration
- Path aliases:
  - `@/` → `client/src/`
  - `@shared/` → `shared/`
  - `@assets/` → `attached_assets/`
- Custom meta images plugin for OpenGraph
- Replit-specific plugins (dev environment only)
- Build output to `dist/public/`

### TypeScript Configuration (`tsconfig.json`)

- Strict mode enabled
- ESNext modules
- Path aliases matching Vite config
- Includes client, server, and shared directories

### Drizzle Configuration (`drizzle.config.ts`)

- PostgreSQL dialect
- Schema location: `shared/schema.ts`
- Migrations output: `./migrations`
- Database URL from environment variable

### Tailwind Configuration

- Uses Tailwind CSS v4 (via Vite plugin)
- Custom animations defined
- Dark mode support via class strategy
- Custom font families (DM Sans, Space Grotesk)

## 🚢 Deployment

### Static Deployment (Recommended)

The site is designed to be deployed as a static site:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy `dist/public/`** to:
   - GitHub Pages
   - Netlify
   - Vercel
   - Cloudflare Pages
   - Any static host

See `DEPLOYMENT.md` for detailed GitHub Pages instructions.

### Full-Stack Deployment

For full-stack features (API routes, database):

1. Set up PostgreSQL database
2. Configure `DATABASE_URL` environment variable
3. Run database migrations: `npm run db:push`
4. Deploy to:
   - Replit (configured)
   - Railway
   - Render
   - Any Node.js hosting

### Important Notes

- The server code is optional for static deployment
- All client-side features work without a backend
- Database is only needed for future authentication/user features
- Current implementation uses in-memory storage for development

## 📝 Development Notes

### Code Quality

- **TypeScript**: Strict mode enabled for type safety
- **Linting**: No ESLint config currently (can be added)
- **Formatting**: No Prettier config currently (can be added)

### Performance Considerations

- Images should be optimized before adding to `attached_assets/`
- Consider lazy loading for below-the-fold content
- Framer Motion animations are GPU-accelerated
- TanStack Query prevents unnecessary refetches

### Future Enhancements

Potential improvements:
1. **Authentication**: User accounts and admin panel
2. **Blog**: Add a blog section with markdown support
3. **Analytics**: Add visitor tracking
4. **SEO**: Enhanced meta tags and structured data
5. **Testing**: Add unit and integration tests
6. **CI/CD**: Automated testing and deployment
7. **Content Management**: CMS integration for easy content updates
8. **Internationalization**: Multi-language support

### Known Limitations

- Resume download path is hardcoded to `/attached_assets/`
- Testimonials are placeholder data
- Projects section has limited projects
- No backend API routes currently implemented
- Database schema exists but not actively used

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support

## 📄 License

MIT License - See LICENSE file for details

## 👤 Author

**Mohmed Vaid**
- Portfolio: [mohmedvaid.github.io](https://mohmedvaid.github.io)
- GitHub: [@mohmedvaid](https://github.com/mohmedvaid)
- LinkedIn: [mohmedvaid](https://linkedin.com/in/mohmedvaid)
- Email: mohmedvaid@gmail.com

---

**Note**: This is a portfolio website showcasing professional work and experience. The codebase is well-structured and ready for further development or customization.

