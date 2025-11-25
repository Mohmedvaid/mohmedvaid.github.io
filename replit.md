# Portfolio Application

## Overview

This is a modern full-stack portfolio application showcasing a software engineer's professional experience, skills, and projects. Built with React, Express, and PostgreSQL, it features a highly animated and interactive UI with custom cursor effects, theme switching, and embedded games. The application is configured for deployment on Replit with automated build processes and development tooling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**UI Component System**: The application uses shadcn/ui (New York style) built on Radix UI primitives, providing a comprehensive set of accessible, pre-styled components. All UI components follow a consistent design system with CSS variables for theming.

**Styling Approach**: TailwindCSS v4 with custom theme configuration, supporting light/dark modes via next-themes. Custom fonts include DM Sans and Space Grotesk for typography hierarchy.

**Animation Library**: Framer Motion for complex animations including scroll-based effects, custom cursor tracking, and interactive game components. Note: The package.json indicates framer-motion was previously removed but is still referenced in component files.

**State Management**: React Query (TanStack Query v5) for server state management with configured query client that handles API requests and caching.

**Routing**: Wouter for lightweight client-side routing with a simple page structure (Home page with 404 fallback).

**Key Design Patterns**:
- Component composition with shadcn/ui pattern
- Custom hooks for responsive behavior (`use-mobile`, `use-toast`)
- Utility-first CSS with cn() helper for className merging
- Theme-aware components with CSS variable system

### Backend Architecture

**Framework**: Express.js with TypeScript, following ESM module syntax

**Development vs Production**: Separate entry points (`index-dev.ts` and `index-prod.ts`) with different serving strategies:
- Development: Vite middleware integration with HMR support
- Production: Static file serving from built assets

**Application Structure**: 
- Minimal API surface with routes registered via `registerRoutes()` function
- Custom logging middleware that captures request/response details
- Raw body preservation for webhook/payment integrations
- Storage abstraction layer with in-memory implementation

**Storage Pattern**: Interface-based storage (`IStorage`) with current `MemStorage` implementation for user data. This allows easy swapping to database-backed storage without changing business logic.

**Rationale**: The dual-server setup enables rapid development with Vite's HMR while maintaining production efficiency with pre-built static assets.

### Database Design

**ORM**: Drizzle ORM configured for PostgreSQL with schema-first design

**Schema Location**: `shared/schema.ts` contains table definitions using Drizzle's declarative syntax

**Current Schema**: 
- Users table with UUID primary keys (auto-generated)
- Username/password fields with unique constraint on username
- Zod schemas derived from Drizzle schemas for validation

**Migration Strategy**: Drizzle Kit configured to output migrations to `./migrations` directory with push-based workflow via `db:push` script

**Database Provider**: Neon serverless PostgreSQL (@neondatabase/serverless) chosen for serverless-friendly connection pooling and edge compatibility

**Rationale**: Drizzle provides type-safe queries with minimal runtime overhead, while Neon's serverless architecture eliminates connection pool management complexity.

### Build and Development Workflow

**Build Process**: 
1. Vite builds client-side React app to `dist/public`
2. esbuild bundles server code to `dist/index.js` with external packages
3. Single `npm start` command runs production build

**Development Process**:
- `npm run dev` starts Express with tsx watch mode
- Vite dev server runs as middleware on port 5000
- Hot module replacement enabled for instant client updates

**Type Checking**: Separate `npm run check` for TypeScript validation without emission

**Path Aliases**: 
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

### Authentication and Security

**Current State**: Basic user schema exists with username/password fields, but no authentication middleware is implemented

**Session Management**: connect-pg-simple package included for PostgreSQL-backed sessions, though not yet configured

**Security Considerations**: Application includes express.json() with raw body access for webhook signature verification

### Styling and Theming System

**CSS Architecture**: 
- Tailwind v4 with `@theme inline` directive for CSS variable definitions
- Dual theme support (light/dark) with automatic system preference detection
- Component-scoped design tokens via CSS variables
- Custom animations via tw-animate-css plugin

**Design Tokens**: Comprehensive color system with semantic naming (background, foreground, primary, secondary, muted, accent, destructive) that automatically adapts to theme

**Typography**: Custom font stack with DM Sans for body text and Space Grotesk for display/headings

### Custom Features

**Custom Cursor**: Desktop-only animated cursor with pointer detection and spring physics

**Interactive Elements**: 
- Snake game component with keyboard controls
- Contact dialog with obfuscated contact information
- Smooth scroll animations tied to scroll progress

**Meta Tag Management**: Custom Vite plugin (`vite-plugin-meta-images`) that dynamically updates OpenGraph and Twitter card images based on Replit deployment domain

## External Dependencies

### Core Framework Dependencies

- **React Ecosystem**: react@18, react-dom, react-router via wouter
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **TypeScript**: Full TypeScript support across client and server

### UI Component Libraries

- **Radix UI**: Complete suite of unstyled, accessible primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled component system built on Radix (config in components.json)
- **Lucide React**: Icon library for consistent iconography

### Styling and Animation

- **TailwindCSS**: v4 via @tailwindcss/vite plugin
- **Framer Motion**: Advanced animation library for interactive components
- **class-variance-authority**: Type-safe variant management for components
- **clsx + tailwind-merge**: Utility for conditional className composition

### Data and State Management

- **TanStack Query**: Server state management with caching and refetching
- **React Hook Form**: Form handling with @hookform/resolvers for validation
- **Zod**: Schema validation integrated with Drizzle

### Database and ORM

- **Drizzle ORM**: Type-safe PostgreSQL ORM with drizzle-zod for schema-to-validator conversion
- **Neon Serverless**: PostgreSQL database provider optimized for serverless
- **Drizzle Kit**: CLI tool for migrations and schema management

### Backend Services

- **Express.js**: Web server framework with middleware support
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development and Replit Integration

- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific file navigation
- **@replit/vite-plugin-dev-banner**: Development mode indicator
- **tsx**: TypeScript execution for development server
- **nanoid**: Secure random ID generation

### Theme Management

- **next-themes**: System-aware theme switching with localStorage persistence

### Notable Integrations

The application includes resume content in `attached_assets/` directory, suggesting a content management or portfolio showcase feature. The Vite meta images plugin indicates deployment on Replit with automatic OpenGraph image URL resolution.