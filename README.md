# Portfolio Web Application

A production-ready portfolio website built with Next.js 14+, React 18+, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Professional intro with call-to-action buttons
- **About Page**: Professional summary and skills grouped by category
- **Projects Page**: Dynamic project cards with filtering and details
- **Project Details**: Detailed view of each project with technical decisions and improvements
- **Contact Page**: Contact form with validation and backend API
- **Responsive Design**: Mobile-first approach works on all devices

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

## Project Structure

```
src/
├── app/
│   ├── (home)/
│   │   └── page.tsx          # Home page
│   ├── about/
│   │   └── page.tsx          # About page with skills
│   ├── projects/
│   │   ├── page.tsx          # Projects grid
│   │   └── [slug]/
│   │       └── page.tsx      # Project detail page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact API endpoint
│   ├── layout.tsx            # Root layout with navigation
│   └── globals.css           # Global styles
├── components/
│   ├── ProjectCard.tsx       # Project card component
│   └── ContactForm.tsx       # Contact form component
├── data/
│   └── projects-data.json    # Projects data
└── lib/
    └── (utility files)
public/
└── images/
    └── (project screenshots)
```

## Customization

### Adding Projects

1. Edit `src/data/projects-data.json` and add a new project entry
2. Add a screenshot to `/public/images/`
3. The project will automatically appear on the Projects page

### Updating Skills

Edit `src/data/skills-data.json` to update the skills displayed on the About page.

### Styling

All styling uses Tailwind CSS utility classes. Customize colors and spacing in `tailwind.config.ts`.

### Contact Form

The contact form sends submissions to `/api/contact`. To enable email sending:

1. Install an email service (e.g., SendGrid, Nodemailer)
2. Add your API credentials to environment variables
3. Update `src/app/api/contact/route.ts` with the email service integration

## Deployment

This project is ready to deploy to:

- **Vercel** (recommended for Next.js): Push to GitHub and connect to Vercel
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Connect your repository and configure build settings
- **Docker**: Create a Docker image and deploy to your preferred platform

## License

This project is open source and available under the MIT License.
