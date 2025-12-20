# Jeffrey Shen - Personal Portfolio

Modern React portfolio website showcasing my work as a Computer Science student at Carnegie Mellon University.

## Tech Stack

- **Framework:** React 18 with Vite
- **UI Library:** Material-UI (MUI) v5
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Styling:** Emotion (CSS-in-JS)
- **Theme:** Custom purple theme with dark mode

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle with localStorage persistence
- ✅ Smooth scroll navigation
- ✅ Dynamic routing for project detail pages
- ✅ Purple-themed design with gradient accents
- ✅ Animated transitions with Framer Motion
- ✅ SEO optimized

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, ScrollToTop
│   ├── sections/    # Landing page sections
│   ├── cards/       # Reusable card components
│   └── ui/          # Small UI components
├── pages/           # Route components
├── data/            # Content data files
├── theme/           # MUI theme configuration
└── utils/           # Helper functions
```

## Adding New Projects

To add a new project, edit `src/data/projects.js` and add a new object to the `projects` array:

```javascript
{
  id: 'unique-id',
  title: 'Project Title',
  slug: 'url-slug',
  category: 'PROFESSIONAL', // or 'ACADEMIC', 'HACKATHON', 'PERSONAL'
  tags: ['React', 'Node.js'],
  featured: true, // Show on main projects grid
  shortDescription: 'Brief description...',
  fullDescription: 'Detailed description...',
  technologies: ['Tech 1', 'Tech 2'],
  links: {
    live: 'https://example.com',
    github: 'https://github.com/...',
  },
  // ... more fields
}
```

## Deployment

This project is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect Vite and configure build settings
4. Site will be deployed with automatic HTTPS and CDN

## License

© 2024 Jeffrey Shen. All rights reserved.
