# Component Documentation

This document provides detailed documentation for all custom components in the portfolio website.

## Table of Contents

- [Core Components](#core-components)
- [Page Components](#page-components)
- [UI Components](#ui-components)
- [Component Patterns](#component-patterns)

## Core Components

### App.tsx

**Location**: `client/src/App.tsx`

**Purpose**: Root application component that sets up providers and routing.

**Props**: None

**Features**:
- Theme provider (dark/light mode)
- Query client provider (TanStack Query)
- Tooltip provider (shadcn/ui)
- Toast notifications
- Routing setup

**Usage**:
```tsx
// Automatically used in main.tsx
import App from "./App";
```

**Dependencies**:
- `wouter` - Routing
- `@tanstack/react-query` - Data fetching
- `next-themes` - Theme management
- `@/components/ui/tooltip` - Tooltip component
- `@/components/ui/toaster` - Toast notifications

---

### CustomCursor.tsx

**Location**: `client/src/components/CustomCursor.tsx`

**Purpose**: Custom animated mouse cursor that replaces the default browser cursor.

**Props**: None

**Features**:
- Smooth spring animations via Framer Motion
- Detects interactive elements (buttons, links)
- Changes appearance on hover
- Hidden on mobile devices (md:block)

**Implementation Details**:
- Uses `useState` to track mouse position
- Uses `useEffect` to attach mouse move listener
- Detects pointer cursor via `getComputedStyle`
- Two-part cursor: outer ring and inner dot

**Animation Behavior**:
- **Normal**: Outer ring (40px) + inner dot (8px)
- **On Interactive**: Outer ring scales to 1.5x, inner dot disappears
- **Spring Physics**: High stiffness (500-1000) for responsive feel

**Usage**:
```tsx
import { CustomCursor } from "@/components/CustomCursor";

// Add to any page
<CustomCursor />
```

**Accessibility**: 
- Hidden on mobile (pointer-events-none)
- Doesn't interfere with keyboard navigation

---

### SnakeGame.tsx

**Location**: `client/src/components/SnakeGame.tsx`

**Purpose**: Interactive Snake game as an Easter egg feature.

**Props**:
- `isOpen: boolean` - Controls game visibility
- `onClose: () => void` - Callback to close game

**Features**:
- Classic Snake gameplay (20x20 grid)
- Score tracking (10 points per food)
- Collision detection (walls, self)
- Countdown timer before start
- Game over screen with restart
- Touch controls for mobile
- Keyboard controls (arrow keys)
- On-screen buttons for mobile

**Game Logic**:
- Snake starts with 3 segments
- Moves every 200ms
- Food spawns randomly
- Snake grows when eating food
- Game ends on collision

**State Management**:
- `snake`: Array of {x, y} positions
- `food`: Single {x, y} position
- `direction`: Current movement direction
- `gameOver`: Boolean flag
- `score`: Number (starts at 0)
- `countdown`: Number | null (3, 2, 1, null)

**Controls**:
- **Desktop**: Arrow keys
- **Mobile**: Touch swipe or on-screen buttons
- **Prevent Reverse**: Can't move directly opposite current direction

**Usage**:
```tsx
import { SnakeGame } from "@/components/SnakeGame";

const [showGame, setShowGame] = useState(false);

<SnakeGame isOpen={showGame} onClose={() => setShowGame(false)} />
```

**Accessibility**:
- Keyboard navigation supported
- Touch-friendly controls
- Clear visual feedback

---

### ContactDialog.tsx

**Location**: `client/src/components/ContactDialog.tsx`

**Purpose**: Modal dialog for displaying contact information.

**Props**:
- `isOpen: boolean` - Controls dialog visibility
- `onClose: () => void` - Callback to close dialog

**Features**:
- Email display with copy functionality
- Phone number with reveal mechanism (anti-scraping)
- Copy-to-clipboard with visual feedback
- Direct mailto/tel links
- Animated entrance

**Security**:
- Phone number obfuscated until user clicks "Reveal"
- Phone parts stored separately in code
- Prevents bot scraping

**State Management**:
- `phoneRevealed: boolean` - Whether phone is visible
- `emailCopied: boolean` - Copy feedback state
- `phoneCopied: boolean` - Copy feedback state

**Usage**:
```tsx
import { ContactDialog } from "@/components/ContactDialog";

const [showContact, setShowContact] = useState(false);

<ContactDialog isOpen={showContact} onClose={() => setShowContact(false)} />
```

**Contact Information**:
- Email: `mohmedvaid@gmail.com`
- Phone: `(307) 213-9838` (revealed on click)

---

## Page Components

### Home.tsx

**Location**: `client/src/pages/Home.tsx`

**Purpose**: Main portfolio page with all sections.

**Props**: None

**Sections**:

1. **Navigation Bar**
   - Fixed at top
   - Logo/brand name
   - Social links (GitHub, LinkedIn)
   - Theme toggle
   - "Let's Talk" button

2. **Hero Section**
   - Large profile image
   - Animated text overlay ("I'm Mohmed.")
   - Background text ("ALOHA")
   - Gradient blobs for visual interest
   - Description text

3. **Journey Timeline**
   - Career progression timeline
   - Interactive markers with dialogs
   - Alternating left/right layout
   - Animated cards on scroll

4. **Expertise Section**
   - Skills organized by category
   - Three columns: Frontend, Creative Coding, Backend
   - Hover effects on cards

5. **About Me Section**
   - Personal interests and philosophy
   - Three cards: Design Philosophy, Continuous Learning, Outside Work
   - Easter egg hint (Snake game)

6. **Testimonials Section**
   - Client testimonials (placeholder data)
   - Three-column grid
   - Avatar initials

7. **Projects Section**
   - Featured projects
   - Project cards with tags
   - Links to live demos and GitHub repos
   - Currently shows 2 projects

8. **Footer/Resume Section**
   - Call-to-action text
   - Resume preview dialog
   - Contact button
   - Dark background with gradient

**Sub-Components**:

#### WavyLine
- Animated SVG path
- Scroll-progress based animation
- Gradient stroke
- Glow filter effect

#### ThemeToggle
- Sun/Moon icon toggle
- Smooth transitions
- Respects system preference

#### JourneyItem
- Timeline entry component
- Card with year, title, company, description
- Interactive marker with dialog
- Alternating alignment

**Props**:
- `year: string` - Timeline year/date
- `title: string` - Job title
- `company: string` - Company name
- `description: string` - Job description
- `align: "left" | "right"` - Card alignment

#### ProjectCard
- Project showcase card
- Gradient background
- Tags display
- Hover animations

**Props**:
- `title: string` - Project name
- `desc: string` - Project description
- `tags: string[]` - Technology tags

#### InteractiveText
- Animated heading text
- Letter-by-letter hover effects
- Gradient text for "Mohmed"
- Mouse interaction

**Usage**:
```tsx
import Home from "@/pages/Home";

// Automatically rendered by router at "/"
```

**Dependencies**:
- Framer Motion for animations
- shadcn/ui components
- Custom components (CustomCursor, SnakeGame, ContactDialog)
- Assets from `@assets/`

---

### NotFound.tsx

**Location**: `client/src/pages/not-found.tsx`

**Purpose**: 404 error page for unmatched routes.

**Props**: None

**Features**:
- Centered card layout
- Error icon
- Helpful message
- Consistent styling with rest of site

**Usage**:
```tsx
// Automatically rendered by router for unmatched routes
```

---

## UI Components

### shadcn/ui Components

**Location**: `client/src/components/ui/`

The project uses 50+ pre-built components from shadcn/ui. These are Radix UI primitives styled with Tailwind CSS.

**Key Components**:

#### Button
- Multiple variants (default, outline, ghost, etc.)
- Size options (sm, md, lg)
- Icon support
- Loading states

#### Card
- Container for content sections
- Header, Content, Footer sections
- Hover effects

#### Dialog
- Modal dialogs
- Accessible (keyboard, focus trap)
- Backdrop blur
- Multiple sizes

#### Badge
- Status indicators
- Technology tags
- Color variants

#### Tooltip
- Hover information
- Accessible positioning
- Customizable content

**Full List**: See `client/src/components/ui/` directory for all available components.

**Customization**: All components can be customized via Tailwind classes or by editing the component files directly.

---

## Component Patterns

### Animation Patterns

**Framer Motion Usage**:
```tsx
// Entrance animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Scroll-triggered animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover animations
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: "spring" }}
>
  Content
</motion.div>
```

### Theme Patterns

**Dark Mode Support**:
```tsx
// Using next-themes
const { theme, setTheme } = useTheme();

// Conditional classes
className="bg-white dark:bg-gray-900"

// CSS variables (automatic)
className="bg-background text-foreground"
```

### State Management Patterns

**Local State**:
```tsx
const [isOpen, setIsOpen] = useState(false);
```

**Derived State**:
```tsx
const isActive = count > 0;
```

**Effect Hooks**:
```tsx
useEffect(() => {
  // Setup
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

### Event Handling Patterns

**Click Handlers**:
```tsx
const handleClick = () => {
  // Action
};

<button onClick={handleClick}>Click</button>
```

**Form Handlers**:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Process form
};
```

### Accessibility Patterns

**ARIA Labels**:
```tsx
<button aria-label="Close dialog">
  <X />
</button>
```

**Keyboard Navigation**:
```tsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Escape') {
    onClose();
  }
};
```

**Focus Management**:
```tsx
// Automatic with shadcn/ui Dialog component
```

## Best Practices

1. **Component Composition**: Break down large components into smaller, reusable pieces
2. **Type Safety**: Use TypeScript for all props and state
3. **Accessibility**: Always include ARIA labels and keyboard support
4. **Performance**: Use React.memo for expensive components
5. **Styling**: Prefer Tailwind utilities over custom CSS
6. **Animations**: Use Framer Motion for complex animations
7. **State**: Keep state as local as possible
8. **Props**: Use descriptive prop names and types

## Future Components

Potential components to add:
- `BlogPost.tsx` - Blog post display
- `ProjectDetail.tsx` - Detailed project view
- `SkillBadge.tsx` - Reusable skill badge
- `Timeline.tsx` - Reusable timeline component
- `TestimonialCard.tsx` - Testimonial display
- `LoadingSpinner.tsx` - Loading states
- `ErrorBoundary.tsx` - Error handling

