# Portfolio Web Application - AI Coding Agent Instructions

## Project Overview
Production-ready portfolio web application built with Next.js 14+, React 18+, TypeScript, and Tailwind CSS. 

**Tech Stack:**
- Frontend: React with TypeScript
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- Backend: Next.js API Routes / Server Actions
- Package Manager: npm

## Architecture

### Pages Structure (src/app)
```
- (home)/page.tsx         // Home page with intro & CTA buttons
- about/page.tsx          // About section with skills
- projects/page.tsx       // Projects grid
- projects/[slug]/page.tsx // Dynamic project detail page
- contact/page.tsx        // Contact form with validation
- api/contact/route.ts    // API endpoint for contact submissions
```

### Data Models
**Projects** (projects-data.json):
```json
{
  "id": "unique-slug",
  "title": "Project Title",
  "description": "Short description",
  "fullDescription": "Detailed problem & solution",
  "technologies": ["React", "Node.js"],
  "screenshot": "/images/project-slug.png",
  "githubLink": "https://github.com/...",
  "liveLink": "https://...",
  "technicalDecisions": ["Decision 1", "Decision 2"],
  "futureImprovements": ["Improvement 1"]
}
```

### Component Hierarchy
- `RootLayout` → Global nav, footer
- `ProjectCard` → Reusable project display
- `ContactForm` → Form with validation (client-side + server validation)
- `SkillsGrid` → About page skills grouping

## Key Conventions

### Responsive Design
- Mobile-first approach: Start with mobile styles, use Tailwind's `md:`, `lg:`, `xl:` breakpoints
- Grid layouts: Use CSS Grid for projects, Flexbox for components
- Typography: Scale text using Tailwind's `text-sm`, `text-base`, `text-lg`, `text-2xl`

### Form Handling
- Validation: Zod or simple client-side checks before submission
- API route handles backend validation + email sending (if applicable)
- Return structured JSON: `{ success: boolean, message: string, data?: any }`

### Styling Patterns
- Use Tailwind utility classes (no custom CSS)
- Color palette: Defined in `tailwind.config.ts`
- Dark mode: Configure in `tailwind.config.ts` if needed
- Custom spacing: Use Tailwind's spacing scale (4px base unit)

## Development Workflow

### Key Commands
- `npm run dev` - Start dev server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript checking

### File Organization
- `/src/app` - Pages and layouts (App Router)
- `/src/components` - Reusable React components
- `/src/lib` - Utilities, constants, types
- `/public` - Static assets (images, etc.)
- `/src/data` - JSON data files (projects, skills)

### Import Aliases
Use `@/` prefix for imports:
```typescript
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects-data.json'
```

## Common Tasks

### Adding a New Project
1. Add entry to `src/data/projects-data.json`
2. Add screenshot to `/public/images/`
3. No page creation needed (dynamic routing handles it)

### Updating Skills
- Edit `src/data/skills-data.json`
- Refresh app (no rebuild needed)

### Styling a Component
- Use Tailwind classes in JSX
- If responsive: use `md:`, `lg:` prefixes
- Reference `tailwind.config.ts` for custom colors

## API Patterns

### Contact Endpoint (POST /api/contact)
```typescript
// Request: { name, email, message }
// Response: { success: boolean, message: string }
```

## Critical Files
- `tsconfig.json` - TypeScript config with `@/*` alias
- `tailwind.config.ts` - Color, spacing, breakpoint config
- `next.config.js` - Next.js config (image optimization, etc.)
- `.eslintrc.json` - ESLint rules

## Known Patterns & Anti-patterns

**DO:**
- Use Server Components by default, Client Components when needed (`'use client'`)
- Fetch data on server (in Server Components or Route Handlers)
- Keep forms in Client Components for interactivity

**DON'T:**
- Don't use CSS-in-JS libraries (Tailwind handles styling)
- Don't create new pages without understanding App Router routing
- Don't hardcode project data (always use JSON/database)

## Debugging Tips
- Use `npm run lint` to catch TypeScript/ESLint issues
- Check browser DevTools for styling issues (Inspect element → Tailwind classes)
- Use React DevTools to debug component state/props

## Project Status

✅ **Completed:**
- Copilot instructions created and maintained
- Full project structure scaffolded with TypeScript, Tailwind CSS, and App Router
- All pages implemented (Home, About, Projects, Contact, Project Details)
- Reusable components created (ProjectCard, ContactForm)
- Contact API endpoint implemented
- Project data model established (projects-data.json)
- Configuration files (tsconfig.json, tailwind.config.js, next.config.js, .eslintrc.json)
- Dependencies installed and production build verified
- Development server running and ready

**Getting Started:**
1. Open terminal and navigate to the project root
2. Run `npm run dev` to start the development server
3. Open [http://localhost:3000](http://localhost:3000) in your browser
4. The app should display with all pages: Home, About, Projects, Contact, and Project Details
5. Customize portfolio content by editing:
   - `src/data/projects-data.json` - Add/update projects
   - `src/app/about/page.tsx` - Update skills and bio
   - `src/app/contact/page.tsx` - Update contact information
6. Deploy to Vercel or your preferred hosting platform

**Available Commands:**
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript checking
