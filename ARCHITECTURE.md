# Architecture Documentation

This document provides a detailed overview of the portfolio website's architecture, design decisions, and technical implementation.

## System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                    User Browser                         │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Static Assets (CDN/Hosting)                │
│  - HTML, CSS, JavaScript bundles                        │
│  - Images, fonts, favicons                              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              React Application (SPA)                     │
│  - Client-side routing (Wouter)                         │
│  - State management (React hooks + TanStack Query)      │
│  - UI components (shadcn/ui + custom)                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ (Optional - for full-stack mode)
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Express Server (Node.js)                   │
│  - API routes (/api/*)                                  │
│  - Static file serving (production)                     │
│  - Session management                                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              PostgreSQL Database                        │
│  - User data (future)                                   │
│  - Session storage (optional)                           │
└─────────────────────────────────────────────────────────┘
```

## Development vs Production Modes

### Development Mode

**Entry Point**: `server/index-dev.ts`

1. **Express Server** starts on port 5000
2. **Vite Dev Server** runs in middleware mode
3. **HMR (Hot Module Replacement)** enabled for instant updates
4. **Source Maps** for debugging
5. **Full-stack** capabilities (API routes, database)

**Flow**:
```
Request → Express → Vite Middleware → Transform → Serve
```

### Production Mode

**Entry Point**: `server/index-prod.ts` (or static hosting)

1. **Static Build**: All React code bundled into static files
2. **Express Server** (optional) serves static files
3. **No Vite**: Pre-built assets only
4. **Optimized**: Minified, tree-shaken, code-split

**Flow**:
```
Request → Express/Static Host → Serve pre-built files
```

## Client Architecture

### Component Hierarchy

```
App
├── ThemeProvider (next-themes)
├── QueryClientProvider (TanStack Query)
├── TooltipProvider
├── Toaster
└── Router (Wouter)
    ├── Route: "/" → Home
    └── Route: "*" → NotFound
```

### State Management

**Local State**: React hooks (`useState`, `useRef`, `useEffect`)
- Component-specific state
- UI state (modals, dialogs, toggles)
- Form state

**Server State**: TanStack Query
- API data fetching
- Caching and synchronization
- Background refetching (currently disabled)

**Theme State**: next-themes
- Dark/light mode preference
- System preference detection
- Persistent storage (localStorage)

### Routing

**Library**: Wouter (lightweight React router)

**Routes**:
- `/` - Home page (portfolio)
- `*` - 404 Not Found page

**Future Routes** (not yet implemented):
- `/about` - Detailed about page
- `/projects` - Projects listing
- `/blog` - Blog posts
- `/contact` - Contact form

### Styling Architecture

**Tailwind CSS v4**:
- Utility-first CSS framework
- Custom configuration in `postcss.config.js`
- Dark mode via class strategy
- Custom animations defined in CSS

**Component Styling**:
- shadcn/ui components use Tailwind utilities
- Custom components use Tailwind classes
- Framer Motion for animations
- CSS variables for theming

**Fonts**:
- **DM Sans**: Primary body font
- **Space Grotesk**: Display/heading font
- Loaded via Google Fonts CDN

## Server Architecture

### Express Application

**File**: `server/app.ts`

**Middleware Stack**:
1. JSON body parser
2. URL-encoded body parser
3. Request logging middleware
4. Error handling middleware
5. Route handlers
6. Static file serving (production)

### API Routes

**File**: `server/routes.ts`

Currently minimal - ready for expansion:
- All routes should be prefixed with `/api`
- Storage interface available for CRUD operations
- HTTP server created for WebSocket support (future)

### Storage Layer

**File**: `server/storage.ts`

**Interface**: `IStorage`
- `getUser(id)`: Get user by ID
- `getUserByUsername(username)`: Get user by username
- `createUser(user)`: Create new user

**Current Implementation**: `MemStorage`
- In-memory storage using Map
- Suitable for development
- Should be replaced with database storage in production

**Future Implementation**: Database-backed storage
- Use Drizzle ORM with PostgreSQL
- Implement full CRUD operations
- Add authentication and authorization

## Database Schema

**File**: `shared/schema.ts`

### Users Table

```typescript
users {
  id: string (UUID, primary key)
  username: string (unique, not null)
  password: string (not null)
}
```

**Validation**: Zod schemas via `drizzle-zod`
- `insertUserSchema`: For creating users
- Type-safe insert operations

## Build System

### Vite Configuration

**Key Features**:
- React Fast Refresh
- TypeScript support
- Path aliases for clean imports
- Tailwind CSS integration
- Custom plugins (meta images)
- Replit-specific plugins (dev only)

**Build Output**:
- Entry: `client/index.html`
- Output: `dist/public/`
- Assets: Hashed filenames for cache busting

### TypeScript Configuration

**Strict Mode**: Enabled
- No implicit any
- Strict null checks
- Strict function types
- Strict property initialization

**Module System**: ESNext
- ES modules throughout
- Dynamic imports supported
- Top-level await supported

**Path Aliases**:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`

## Asset Management

### Static Assets

**Location**: `client/public/`
- `favicon.png`: Site icon
- `opengraph.png/jpg`: Social media preview image

### User Assets

**Location**: `attached_assets/`
- Profile images
- Resume documents
- Generated images

**Note**: These are referenced directly in code and should be included in deployment.

## Performance Optimizations

### Code Splitting

- Route-based code splitting (via Wouter)
- Dynamic imports for heavy components
- Lazy loading for below-the-fold content

### Image Optimization

- Consider using WebP format
- Implement lazy loading for images
- Responsive images with srcset

### Bundle Optimization

- Tree shaking (automatic with Vite)
- Minification (production builds)
- Gzip compression (server/hosting)

### Animation Performance

- Framer Motion uses GPU acceleration
- `will-change` CSS property for animated elements
- Reduced motion support (can be added)

## Security Considerations

### Client-Side

- No sensitive data in client code
- Phone number obfuscation in ContactDialog
- XSS prevention via React's built-in escaping
- CSRF protection (if API routes added)

### Server-Side

- Input validation (should use Zod schemas)
- SQL injection prevention (Drizzle ORM)
- Session security (express-session)
- Password hashing (bcrypt - when implemented)

## Scalability

### Current Limitations

- In-memory storage (not scalable)
- Single server instance
- No caching layer
- No CDN for static assets

### Future Improvements

- Database-backed storage
- Redis for session storage
- CDN for static assets
- Load balancing for multiple instances
- Caching strategy (Redis/Memcached)

## Deployment Architecture

### Static Deployment (Current)

```
GitHub Actions / CI/CD
    ↓
npm run build
    ↓
dist/public/ (static files)
    ↓
GitHub Pages / Static Host
```

### Full-Stack Deployment (Future)

```
CI/CD Pipeline
    ↓
Build Client → dist/public/
Build Server → dist/index.js
    ↓
Deploy to Hosting Platform
    ↓
PostgreSQL Database
    ↓
Express Server (serves static + API)
```

## Environment Variables

### Required

- `DATABASE_URL`: PostgreSQL connection string (for full-stack)

### Optional

- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode (development/production)
- `REPLIT_INTERNAL_APP_DOMAIN`: Replit deployment domain
- `REPLIT_DEV_DOMAIN`: Replit dev domain

## Error Handling

### Client-Side

- React Error Boundaries (can be added)
- TanStack Query error handling
- Toast notifications for user feedback

### Server-Side

- Express error middleware
- Try-catch blocks in route handlers
- Proper HTTP status codes
- Error logging (console.log currently)

## Testing Strategy (Future)

### Unit Tests

- Component testing (React Testing Library)
- Utility function testing (Vitest)
- Hook testing

### Integration Tests

- API route testing
- Database operation testing
- End-to-end flows

### E2E Tests

- Playwright or Cypress
- Critical user flows
- Cross-browser testing

## Monitoring & Analytics (Future)

### Performance Monitoring

- Web Vitals tracking
- Error tracking (Sentry)
- User analytics (privacy-friendly)

### Server Monitoring

- Request logging
- Error tracking
- Performance metrics
- Database query monitoring

## Conclusion

This architecture provides a solid foundation for a portfolio website with room for growth. The separation of concerns, modern tooling, and flexible deployment options make it maintainable and scalable.

