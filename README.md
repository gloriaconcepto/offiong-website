# React + TypeScript + Vite + React Router Starter

A modern, fast, and scalable starter template built with **React 19**, **TypeScript**, **Vite**, and **React Router v7**, styled with a sleek custom design system.

---

## 🚀 Features

- ⚡ **Lightning-Fast Tooling**: Powered by [Vite](https://vitejs.dev/) with instant Hot Module Replacement (HMR).
- 🛡️ **Type Safety**: Full TypeScript 5+ integration with strict type checking and zero configuration needed.
- 🧭 **Declarative Routing**: Client-side routing with [React Router v7](https://reactrouter.com/), featuring nested routes, layouts, active link states, and custom 404 handling.
- 🎨 **Modern Design System**: Sleek dark-mode aesthetic, CSS design tokens, smooth glassmorphism, responsive container grids, and Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`).
- 💎 **Iconography**: Beautiful icons via [Lucide React](https://lucide.dev/).
- 📦 **Clean Architecture**: Organized structure with separated components, pages, routes, and styles.

---

## 📁 Project Structure

```text
offiong-website/
├── public/                 # Static public assets (favicons, icons)
│   └── favicon.svg
├── src/
│   ├── assets/             # Project media & static files
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation header with active indicators
│   │   ├── Footer.tsx      # Footer with stack badges & copyright
│   │   └── Layout.tsx      # Core page wrapper with <Outlet />
│   ├── pages/              # Route view components
│   │   ├── HomePage.tsx    # Hero section, interactive counter & feature cards
│   │   ├── FeaturesPage.tsx# Deep dive tabs & code architectural examples
│   │   ├── AboutPage.tsx   # Project details and script references
│   │   └── NotFoundPage.tsx# 404 error page fallback
│   ├── router/             # React Router routing configuration
│   │   └── index.tsx       # createBrowserRouter route definitions
│   ├── App.tsx             # Root component with RouterProvider
│   ├── index.css           # Global design system, theme variables & tokens
│   └── main.tsx            # React application mounting point
├── index.html              # HTML entry point with Google Fonts
├── package.json            # Dependencies and npm script targets
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # Frontend application TypeScript settings
├── tsconfig.node.json      # Node/Vite build TypeScript settings
└── vite.config.ts          # Vite build tool configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have **Node.js 18+** installed on your system.

### 1. Installation

Clone or open the project directory and install dependencies:

```bash
npm install
```

### 2. Development Server

Start the local development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`.

### 3. Production Build

Compile TypeScript and build optimized production assets:

```bash
npm run build
```

The output bundle will be generated in the `dist/` directory.

### 4. Preview Production Build

Locally preview the generated production build:

```bash
npm run preview
```

### 5. Linting

Run code linting:

```bash
npm run lint
```

---

## 🧭 Routing Architecture

Routing is configured in [`src/router/index.tsx`](src/router/index.tsx) using `createBrowserRouter`:

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage` | Hero section, interactive React state demo, feature highlights |
| `/features` | `FeaturesPage` | Interactive tabs showcasing Router, TypeScript & Styling features |
| `/about` | `AboutPage` | Directory structure breakdown, script cheat sheet |
| `*` | `NotFoundPage` | 404 fallback with return-to-home navigation |

To add a new route:
1. Create a page component in `src/pages/YourPage.tsx`.
2. Import it into `src/router/index.tsx`.
3. Add the route object inside the `children` array under `src/router/index.tsx`.
4. (Optional) Add a `<NavLink>` in `src/components/Navbar.tsx`.

---

## 🧰 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
