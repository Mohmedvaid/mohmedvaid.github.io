# Development Guide

This guide provides information for developers working on this portfolio website project.

## Development Workflow

### Setting Up Development Environment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mohmedvaid.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env  # If exists, or create manually
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start full-stack dev server (Express + Vite) |
| `npm run dev:client` | Start Vite dev server only (client-side) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run check` | Type check with TypeScript |
| `npm run db:push` | Push database schema changes |

### Development Server

- **URL**: http://localhost:5000
- **Hot Module Replacement**: Enabled (instant updates)
- **Source Maps**: Enabled for debugging
- **Error Overlay**: Shows build errors in browser

## Code Style & Conventions

### TypeScript

- **Strict Mode**: Always enabled
- **Naming Conventions**:
  - Components: PascalCase (`Home.tsx`, `CustomCursor.tsx`)
  - Files: Match component name
  - Functions: camelCase (`handleClick`, `getUserData`)
  - Constants: UPPER_SNAKE_CASE (`GRID_SIZE`, `API_URL`)
  - Types/Interfaces: PascalCase (`User`, `ContactDialogProps`)

### React Patterns

**Component Structure**:
```tsx
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component
export function Component({ title, onAction }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(false);
  
  // 5. Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // 6. Handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

**Hooks Order**:
1. useState
2. useRef
3. useEffect
4. useCallback
5. useMemo
6. Custom hooks

### File Organization

**Component Files**:
- One component per file
- File name matches component name
- Export default for page components
- Named export for reusable components

**Import Order**:
1. React and React-related
2. Third-party libraries
3. Internal components
4. UI components
5. Utilities
6. Types
7. Assets

**Example**:
```tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CustomCursor } from "@/components/CustomCursor";
import { apiRequest } from "@/lib/queryClient";
import type { User } from "@shared/schema";
import userImage from "@assets/image.png";
```

### Styling Conventions

**Tailwind CSS**:
- Use utility classes
- Group related classes
- Use dark mode variants: `dark:`
- Responsive prefixes: `md:`, `lg:`

**Example**:
```tsx
<div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg">
```

**Custom CSS**:
- Only when Tailwind utilities aren't sufficient
- Use CSS variables for theming
- Keep in `index.css` or component-specific files

### Component Patterns

**Props Interface**:
```tsx
interface ComponentProps {
  // Required props first
  title: string;
  onClick: () => void;
  
  // Optional props
  variant?: "primary" | "secondary";
  className?: string;
}
```

**Default Props**:
```tsx
function Component({ 
  title, 
  variant = "primary",
  className = ""
}: ComponentProps) {
  // ...
}
```

**Children Pattern**:
```tsx
interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div>{children}</div>;
}
```

## Git Workflow

### Branch Naming

- `main` - Production-ready code
- `develop` - Development branch (if using Git Flow)
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `refactor/component-name` - Refactoring

### Commit Messages

Follow conventional commits:
```
type(scope): subject

body (optional)

footer (optional)
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

**Examples**:
```
feat(home): add snake game easter egg
fix(cursor): improve mobile detection
docs(readme): update installation instructions
refactor(components): extract common patterns
```

### Pull Request Process

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Update documentation if needed
5. Create PR with clear description
6. Request review
7. Address feedback
8. Merge after approval

## Testing Guidelines

### Unit Testing (Future)

**Component Tests**:
```tsx
import { render, screen } from "@testing-library/react";
import { Component } from "./Component";

test("renders component", () => {
  render(<Component title="Test" />);
  expect(screen.getByText("Test")).toBeInTheDocument();
});
```

**Utility Tests**:
```tsx
import { formatDate } from "./utils";

test("formats date correctly", () => {
  expect(formatDate(new Date("2024-01-01"))).toBe("Jan 1, 2024");
});
```

### Integration Testing (Future)

**API Tests**:
```tsx
import { apiRequest } from "./api";

test("fetches user data", async () => {
  const user = await apiRequest("GET", "/api/user/1");
  expect(user).toHaveProperty("id");
});
```

### E2E Testing (Future)

**Playwright Example**:
```tsx
test("navigates to home page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Portfolio/);
});
```

## Debugging

### Browser DevTools

- **React DevTools**: Inspect component tree and state
- **Network Tab**: Monitor API requests
- **Console**: View logs and errors
- **Performance**: Profile rendering

### VS Code Debugging

**Launch Configuration** (`.vscode/launch.json`):
```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Server",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "dev"],
  "skipFiles": ["<node_internals>/**"]
}
```

### Common Issues

**Port Already in Use**:
```bash
# Find process using port 5000
lsof -ti:5000

# Kill process
kill -9 $(lsof -ti:5000)
```

**Module Not Found**:
- Check import paths
- Verify file exists
- Check tsconfig.json paths

**Type Errors**:
- Run `npm run check`
- Check TypeScript version
- Verify type definitions

## Performance Optimization

### Code Splitting

**Route-based**:
```tsx
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));

<Suspense fallback={<Loading />}>
  <Home />
</Suspense>
```

**Component-based**:
```tsx
const HeavyComponent = lazy(() => import("./HeavyComponent"));
```

### Image Optimization

**Before Adding Images**:
1. Compress images (TinyPNG, ImageOptim)
2. Use WebP format when possible
3. Provide multiple sizes (srcset)
4. Lazy load below-the-fold images

**Example**:
```tsx
<img 
  src={image}
  loading="lazy"
  alt="Description"
/>
```

### Bundle Analysis

**Analyze Bundle Size**:
```bash
npm run build -- --analyze
```

**Check for Large Dependencies**:
- Review `package.json`
- Consider alternatives for large libraries
- Use tree-shaking effectively

## Security Best Practices

### Client-Side

- **Never commit secrets**: Use environment variables
- **Sanitize user input**: Prevent XSS
- **Validate data**: Use Zod schemas
- **HTTPS only**: In production

### Server-Side

- **Input validation**: Always validate
- **SQL injection**: Use parameterized queries (Drizzle ORM)
- **Rate limiting**: Implement for API routes
- **CORS**: Configure properly
- **Session security**: Secure cookies, CSRF tokens

### Environment Variables

**Never commit**:
- API keys
- Database passwords
- Secret keys
- Private tokens

**Use `.env` file**:
```env
DATABASE_URL=postgresql://...
API_KEY=secret_key_here
```

**Add to `.gitignore`**:
```
.env
.env.local
.env.*.local
```

## Documentation Standards

### Code Comments

**When to Comment**:
- Complex algorithms
- Non-obvious business logic
- Workarounds for bugs
- Public API documentation

**Example**:
```tsx
/**
 * Calculates the distance between two points using the
 * Haversine formula for great-circle distance.
 * 
 * @param lat1 - Latitude of first point
 * @param lon1 - Longitude of first point
 * @param lat2 - Latitude of second point
 * @param lon2 - Longitude of second point
 * @returns Distance in kilometers
 */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  // Implementation
}
```

### README Updates

**When to Update**:
- New features added
- Configuration changes
- Breaking changes
- New dependencies

### Component Documentation

**Document**:
- Purpose of component
- Props interface
- Usage examples
- Dependencies
- Known limitations

## Deployment Checklist

Before deploying:

- [ ] All tests pass
- [ ] Type checking passes (`npm run check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables configured
- [ ] Database migrations run (if applicable)
- [ ] Assets optimized
- [ ] Documentation updated
- [ ] Error handling tested
- [ ] Performance tested
- [ ] Security review completed

## Resources

### Documentation

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com)

### Tools

- [React DevTools](https://react.dev/learn/react-developer-tools)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind Play](https://play.tailwindcss.com)

## Getting Help

1. Check documentation first
2. Search existing issues
3. Review code examples
4. Ask in team chat (if applicable)
5. Create detailed issue report

## Contributing

When contributing:

1. Follow code style guidelines
2. Write clear commit messages
3. Update documentation
4. Add tests for new features
5. Ensure all checks pass
6. Request code review

---

**Remember**: Write code that you'd be happy to maintain in 6 months. Prioritize clarity over cleverness.

