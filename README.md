# dSandBox Website

A Next.js application with TypeScript, Tailwind CSS, shadcn/ui, and a simple automated code quality checks.

## 📚 Documentation

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/docs) - Re-usable components built with Radix UI and Tailwind CSS
- [Lucide Icons](https://lucide.dev/icons/) - Beautiful & consistent icon toolkit

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── features/         # Feature-specific components
│   └── common/           # Shared/common components
├── lib/                   # Utility libraries
│   └── utils.ts          # Utility functions
├── services/              # API services and external integrations
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── constants/             # Application constants
├── stores/                # State management (if using Zustand)
├── config/                # Configuration files
└── public/                # Static assets
```

## 🚀 Quick Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm (will be installed automatically if not present)

### Installation

#### macOS/Linux:

```bash
chmod +x setup.sh
./setup.sh
```

#### Windows:

```cmd
setup.bat
```

#### Manual Setup:

```bash
pnpm install
pnpm exec husky init
```

## 🛠️ Development

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linting
pnpm run lint
```

## 🔧 Git Hooks

This project uses Husky for automated code quality checks:

- **Pre-commit**: Runs tests and linting checks

## 🚀 Running the App

```bash
# Start development server
pnpm run dev

# Open http://localhost:3000 in your browser
```

## 🧪 Testing

```bash
# Test git hooks
git add .
git commit -m "test: setup verification"
```
