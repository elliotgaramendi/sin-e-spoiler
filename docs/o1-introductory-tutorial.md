# 🎬 Cine SpoilerS: Your First React Cinema App✨

_A professional guide to building a modern cinema web application using React, TypeScript, and clean CSS architecture._

🎥 Welcome to **Cine SpoilerS**, an AI-enhanced movie listing platform where you can see everything without spoilers! This guide will walk you through building your first React app with TypeScript, Vite, and modern CSS patterns. 🚀

---

## Table of Contents

- [🎬 Cine SpoilerS: Your First React Cinema App✨](#-cine-spoilers-your-first-react-cinema-app)
  - [Table of Contents](#table-of-contents)
  - [1. Understanding the Concept](#1-understanding-the-concept)
    - [What is React?](#what-is-react)
    - [Why Declarative?](#why-declarative)
    - [The Power of Type Safety](#the-power-of-type-safety)
    - [Core React Concepts Architecture](#core-react-concepts-architecture)
    - [Component Structure Pattern](#component-structure-pattern)
  - [2. Environment Setup](#2-environment-setup)
    - [Prerequisites](#prerequisites)
    - [Creating the React App](#creating-the-react-app)
    - [Project Structure Overview](#project-structure-overview)
    - [Initial Cleanup \& Setup](#initial-cleanup--setup)
    - [Development Server](#development-server)
    - [VS Code Extensions](#vs-code-extensions)
    - [Project Configuration Files](#project-configuration-files)
    - [Verify Setup](#verify-setup)
  - [3. Implementation](#3-implementation)
    - [Step 0: Base Structure - HTML Entry Setup](#step-0-base-structure---html-entry-setup)
    - [Step 1: Styles I Base CSS Architecture for "Cine SpoilerS"](#step-1-styles-i-base-css-architecture-for-cine-spoilers)
    - [Step 2: TypeScript Types - Movie Data Structure](#step-2-typescript-types---movie-data-structure)
    - [Step 3: Movie Data - TMDB Mock Data](#step-3-movie-data---tmdb-mock-data)
    - [Step 4: Utility Functions - Data Transformation](#step-4-utility-functions---data-transformation)
    - [Step 5: Header Component - Navigation Bar](#step-5-header-component---navigation-bar)
    - [Step 6: Footer Component - Contact \& Info](#step-6-footer-component---contact--info)
    - [Step 7: Hero Component - Highlight Banner](#step-7-hero-component---highlight-banner)
    - [Step 8: Rating Component - Star Display](#step-8-rating-component---star-display)
    - [Step 9: MovieCard Component - Movie Display](#step-9-moviecard-component---movie-display)
    - [Step 10: MovieGrid Component - Grid Section](#step-10-moviegrid-component---grid-section)
    - [Step 11: App Component - Main Orchestrator](#step-11-app-component---main-orchestrator)
    - [Step 12: React Entry Point \& Final Setup](#step-12-react-entry-point--final-setup)
  - [4. Congratulations!](#4-congratulations)
  - [5. Next Steps - Group 2 Preview](#5-next-steps---group-2-preview)

---

## 1. Understanding the Concept

### What is React?

🧠 **React** is a modern JavaScript library for building user interfaces declaratively using a component-based architecture. With React, we get powerful features like Concurrent Rendering and improved performance out of the box.

- 🧩 **Component-Based:** Build encapsulated components that manage their own state
- 🔁 **One-Way Data Flow:** Predictable data movement from parent to child
- ⚡ **Virtual DOM:** Efficient updates and rendering
- ✨ **JSX:** Write HTML-like syntax directly in JavaScript
- 🛡️ **Type Safety:** Enhanced development experience with better tooling

---

### Why Declarative?

With React, you don't describe step-by-step how to change the UI — you **declare** what the UI should look like, and React handles the updates efficiently.

```tsx
// Declarative approach
interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <h2>Hello, {name}! Welcome to Cine SpoilerS 🎉</h2>
  );
};

export default WelcomeMessage;
```

---

### The Power of Type Safety

Modern React development leverages static type checking to catch errors at compile time:

- 🔍 **Better IntelliSense:** Auto-completion and error detection in your IDE
- 🛡️ **Runtime Error Prevention:** Catch mistakes before they reach production
- 📚 **Self-Documenting Code:** Types serve as inline documentation
- 🔧 **Refactoring Confidence:** Make changes across large projects safely
- 👥 **Team Collaboration:** Clear contracts between components and APIs

---

### Core React Concepts Architecture

```
   Components          Props           JSX              Type Safety
       │                │              │                    │
       ▼                ▼              ▼                    ▼
   ┌─────────┐     ┌─────────┐    ┌─────────┐     ┌──────────────┐
   │ <Movie  │ ──> │ title:  │ ──>│ <div>   │ ──> │ Compile-time │
   │   />    │     │ string  │    │  Movie  │     │  Validation  │
   └─────────┘     └─────────┘    └─────────┘     └──────────────┘
```

🧭 React apps are made of **functions** that return JSX. Each function accepts **typed props**, manages internal state with hooks, and returns a tree of **JSX elements** with full compile-time safety.

---

### Component Structure Pattern

```tsx
// Professional Component Structure
interface MovieTeaserProps {
  title: string;
  genre?: string;
  rating?: number;
  onSelect?: () => void;
}

const MovieTeaser = ({
  title,
  genre = "Unknown",
  rating = 0,
  onSelect
}: MovieTeaserProps) => {
  return (
    <div className="movie__teaser" onClick={onSelect}>
      <h2 className="movie__title">{title}</h2>
      <div className="movie__info">
        <span className="genre">{genre}</span>
        {rating > 0 && (
          <span className="rating">⭐ {rating.toFixed(1)}</span>
        )}
      </div>
    </div>
  );
};

export default MovieTeaser;
```

📦 **Key Features:**
- **Interface definitions** for component contracts
- **Optional properties** with default values
- **Event handlers** for user interactions
- **Conditional rendering** with type-safe checks
- **Clean export pattern** for module organization

---

## 2. Environment Setup

### Prerequisites

Before starting, ensure you have:
- **Node.js** (latest LTS version)
- **npm** or **yarn** package manager
- **VS Code** with React/TypeScript extensions
- **Git** for version control

---

### Creating the React App

**📁 Terminal Command:**
```bash
npm create vite@latest cinespoilers -- --template react-ts
cd cinespoilers
npm install
```

**🧩 What This Creates:**
- ⚡ **Vite** for lightning-fast development
- 🔥 **Hot Module Replacement** for instant updates
- 📦 **Modern build system** with optimized production builds
- 🛡️ **Full type safety** out of the box
- 🎯 **ESLint configuration** for code quality

---

### Project Structure Overview

```
cinespoilers/
├── public/
│   ├── vite.svg          # Default favicon (we'll replace this)
│   └── index.html        # Main HTML template
├── src/
│   ├── components/       # Reusable UI components
│   ├── styles/          # CSS modules and global styles
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
```

---

### Initial Cleanup & Setup

**📁 File Cleanup Steps:**

1. **Clean the src folder:**
```bash
# Remove default files we won't need
rm src/App.css src/assets/react.svg
```

2. **Fix import errors:**
After removing files, you'll see errors in your IDE. This is expected! We'll fix them as we build our components.

3. **Add your custom favicon:**
Replace `public/vite.svg` with your own `favicon.ico` or `favicon.png`. This personalizes your cinema app right from the start! 🎬

**📁 Create Essential Directories:**
```bash
mkdir src/ui/components src/styles src/types src/utils
```

---

### Development Server

**📁 Start Development:**
```bash
npm run dev
```

**✅ Expected Behavior:**
- 🌐 Opens browser at `http://localhost:5173`
- ⚡ Hot reload on file changes
- 🔍 TypeScript error checking in terminal
- 🛠️ Development tools enabled

**🚨 Initial Errors:** You'll see compilation errors after cleanup - this is normal! We're about to fix them by building our cinema app architecture.

---

### VS Code Extensions

**📦 Recommended Extensions:**
- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **CSS Peek**
- **Thunder Client** (for API testing later)

**⚙️ VS Code Settings:**
```json
{
  "emmet.includeLanguages": {
    "typescriptreact": "html"
  },
  "typescript.preferences.quoteStyle": "double"
}
```

---

### Project Configuration Files

Your project comes pre-configured with optimal settings:

- **`tsconfig.json`** - Strict type checking enabled
- **`vite.config.ts`** - Fast development and optimized builds
- **`package.json`** - Modern React ecosystem dependencies
- **`.eslintrc.cjs`** - Code quality rules for professional development

🎯 **No manual configuration needed** - everything is set up for professional development out of the box!

---

### Verify Setup

**🧪 Quick Test:**
1. Server running without crashes ✅
2. Browser shows default Vite + React page ✅
3. Hot reload works when editing files ✅
4. TypeScript errors show in terminal ✅
5. Your custom favicon displays ✅

**🎬 Ready for Action:** Your Cine SpoilerS development environment is now ready for building an amazing cinema experience!

---

## 3. Implementation

💡 **Development Tip:** Keep your development server running throughout these steps to catch any errors immediately. Run `npm run dev` and monitor the terminal for TypeScript errors and warnings! 🚀

---

### Step 0: Base Structure - HTML Entry Setup

This step prepares your Vite + React + TypeScript project with essential HTML metadata for a professional cinema experience. 🎬✨

**📁 File Path:** `index.html`

**✅ Features:**
- 🔍 SEO-optimized title and meta description
- 🎨 Theme color for mobile browsers
- ⚡ Font preloading for performance
- 🌟 Proper favicon setup

**🧩 Code:**

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎬 Cine SpoilerS | See Movies Without Spoilers</title>
  <meta name="description" content="AI-powered cinema experience. See everything about movies without spoilers!" />
  <meta name="theme-color" content="#23B5E8" />
  <link rel="icon" type="image/svg+xml" href="/logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
</head>

<body class="body">
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

**🧠 Architecture Benefits:**
- 📊 Use descriptive meta descriptions for SEO
- 🔗 Preconnect to external font providers
- 📱 Theme color improves mobile experience

---

### Step 1: Styles I Base CSS Architecture for "Cine SpoilerS"

This section contains the **entire CSS system** needed to support the "Cine SpoilerS" React cinema app. It follows your modular, responsive, and animation-rich style methodology with `@property`, keyframes, and scroll-driven interactions. Layered CSS system designed to be:
- ✅ **Semantic** (HTML5) 📝
- ✅ **Scalable** (utility-first + BEM partial) 📏
- ✅ **Customizable** (CSS variables) 🎨
- ✅ **Responsive** (media queries, clamp units) 📱
- ✅ **Animated** (using `@property` and keyframes) ✨

---


**📁 Folder Structure**

```
src/css/ 📂
├── index.css 🎨
└── modules/ 📂
    ├── properties.css 🛠️
    ├── variables.css 🌈
    ├── keyframes.css 🌀
    ├── globals.css 🌐
    ├── layout.css 📐
    ├── components.css 📌
    ├── elements.css 🧱
    └── utils.css 🧰
```

---

**✨ `src/css/modules/properties.css`**

🎬💨 Enables smooth animations by registering animatable custom properties.

```css
@property --length {
  syntax: "<length>";
  inherits: true;
  initial-value: 0;
}

@property --color {
  syntax: "<color>";
  inherits: true;
  initial-value: transparent;
}
```

---

**🌈 `src/css/modules/variables.css`**

🎯🎨 Centralized design tokens for consistent theming and spacing.

```css
:root {
  --color-scheme: dark;

  --primary-color: #23B5E8;
  --secondary-color: #234B96;
  --warning-color: #E8B523;
  --black-color: #010508;
  --white-color: #FEFEFE;

  --neutral-950: #1B1B1B;
  --neutral-200: #BBB;

  --shadow: #FEFEFE80;
  --light-shadow: #01050880;

  --size: 0.21875rem;
  --max-width: 1280px;

  --transition-duration: 0.25s;

  --primary-font: "Roboto", sans-serif;
  --secondary-font: "Open Sans", sans-serif;

  --primary-background: var(--black-color);
  --secondary-background: var(--neutral-950);
  --primary-text: var(--white-color);
  --secondary-text: var(--neutral-200);
  --light-primary-text: var(--black-color);

  @media (width >=768px) {
    --size: 0.25rem;
  }
}
```

---

**🎞️ `src/css/modules/keyframes.css`**

🎥🎨 Scroll-based animations for length and color transitions.

```css
@keyframes change-length {
  from {
    --length: var(--initial-length);
  }

  to {
    --length: var(--final-length);
  }
}

@keyframes change-color {
  from {
    --color: var(--initial-color);
  }

  to {
    --color: var(--final-color);
  }
}
```

---

**🌐 `src/css/modules/globals.css`**

🖋️⚙️ Global document-level rules.

```css
:root {
  color-scheme: var(--color-scheme);
  accent-color: var(--primary-color);
  scroll-behavior: smooth;
  scrollbar-color: var(--primary-color) var(--primary-background);
  scrollbar-width: thin;
}

.body {
  margin: 0;
  background-color: var(--primary-background);
  color: var(--primary-text);
  font-family: var(--primary-font);
}

#root {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.main *[id] {
  scroll-margin-top: calc(var(--size) * 32);
}
```

---

**📐 `src/css/modules/layout.css`**

📐📏 Utility classes for flexible layout systems.

```css
.container {
  max-width: var(--max-width);
  padding-inline: calc(var(--size) * 4);
  margin-inline: auto;
}

.flexbox {
  display: flex;
}

.flexbox--center {
  place-items: center;
  place-content: center;
}

.flexbox--centered-spacing {
  align-items: center;
  justify-content: space-between;
}

.flexbox--responsive {
  flex-direction: column;

  @media (width >=768px) {
    flex-direction: row;
  }
}

.g-layout {
  display: grid;
}

.g-layout--center {
  place-items: center;
  place-content: center;
}

.g-layout--auto-fit-columns {
  grid-template-columns: repeat(auto-fit, minmax(calc(var(--size) * 64), 1fr));
}

.g-layout--auto-fit-columns-lg {
  grid-template-columns: repeat(auto-fit, minmax(calc(var(--size) * 80), 1fr));
}
```

---

**🧩 `src/css/modules/components.css`**

🎛️🧱 Reusable styled components with interactive and responsive behavior.

```css
.header {
  --initial-length: 0;
  --final-length: var(--size);
  --length: var(--initial-length);
  --initial-color: transparent;
  --final-color: var(--light-shadow);
  --color: var(--initial-color);
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  box-shadow: 0 0 calc(var(--length) * 0.5) calc(var(--length) * 0.125) var(--shadow);
  background-color: var(--color);
  backdrop-filter: blur(calc(var(--length) * 2));
  animation: change-length linear forwards, change-color linear forwards;
  animation-timeline: scroll();
  animation-range: 0 calc(var(--size) * 64);
}

.main {
  --grad-primary: color-mix(in srgb, var(--primary-color) 18%, transparent);
  --grad-secondary: color-mix(in srgb, var(--secondary-color) 15%, transparent);

  &> :nth-child(odd) {
    background-image:
      radial-gradient(circle at 20% 30%, var(--grad-primary) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, var(--grad-secondary) 0%, transparent 40%),
      linear-gradient(135deg, var(--primary-background) 0%, var(--secondary-background) 100%);
  }

  &> :nth-child(even) {
    background-image:
      radial-gradient(circle at 80% 30%, var(--grad-secondary) 0%, transparent 40%),
      radial-gradient(circle at 20% 70%, var(--grad-primary) 0%, transparent 40%),
      linear-gradient(135deg, var(--secondary-background) 0%, var(--primary-background) 100%);
  }
}

.nav {
  padding-block: calc(var(--size) * 4);
}

.nav--scroll {
  --initial-length: calc(var(--size) * 6);
  --final-length: calc(var(--size) * 4);
  --length: var(--initial-length);
  padding-block: var(--length);
  animation: change-length linear forwards;
  animation-timeline: scroll();
  animation-range: 0 calc(var(--size) * 64);
}

.off-canvas {
  --t-translate: -100%;
  position: fixed;
  inset: 0;
  display: flex;
  width: 100%;
  height: 100dvh;
  background-color: var(--light-shadow);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-duration);

  &:target {
    --t-translate: 0;
    opacity: initial;
    pointer-events: initial;
  }
}

.off-canvas--right {
  --t-translate: 100%;
  justify-content: flex-end;

  & .off-canvas__child {
    width: min(calc(var(--size) * 80), 50%);
    transform: translate(var(--t-translate), 0);
  }
}

.off-canvas--mobile {
  @media (width >=768px) {
    all: unset;

    & .off-canvas__child {
      all: unset;
    }

    & .off-canvas__backdrop {
      display: none;
    }
  }
}

.off-canvas__backdrop {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
}

.off-canvas__child {
  cursor: initial;
  width: 100%;
  height: 100dvh;
  padding: calc(var(--size) * 4);
  box-sizing: border-box;
  background-color: var(--light-shadow);
  transform: translate(0, var(--t-translate));
  transition: transform var(--transition-duration);
}

.hero {
  padding-block: calc(var(--size) * 32);
}

.hero__title {
  margin: 0;
  font-family: var(--primary-font);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
}

.hero__paragraph {
  margin: 0;
  font-family: var(--secondary-font);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
}

.section {
  padding-block: calc(var(--size) * 16);
}

.list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.card {
  --primary-card-color: var(--shadow);
  border-radius: calc(var(--size) * 4);
  box-shadow: calc(var(--size) * 0.0625) calc(var(--size) * 0.125) var(--size) calc(var(--size) * 0.0625) var(--primary-card-color);
  overflow: hidden;
  transition: box-shadow var(--transition-duration), transform var(--transition-duration);

  &:hover {
    --primary-card-color: var(--primary-color);
    transform: scale(1.025);
  }
}

.card__image {
  object-fit: cover;
  width: 100%;
  height: calc(var(--size) * 80);
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: var(--size);
  padding: calc(var(--size) * 4);
  background-color: var(--secondary-background);
}

.footer {
  margin-top: auto;
  box-shadow: 0 0 calc(var(--size) * 0.125) calc(var(--size) * 0.0625) var(--shadow);
}
```

---

**📄 `src/css/modules/elements.css`**

🔡🖋️ Base styles for typography, media, and interactive elements.

```css
.title {
  margin: 0;
  font-family: var(--primary-font);
  font-size: calc(var(--size) * 8);
  font-weight: 800;
}

.title--sm {
  font-size: calc(var(--size) * 7);
}

.title--xs {
  font-size: calc(var(--size) * 6);
  font-weight: 700;
}

.title--2xs {
  font-size: calc(var(--size) * 5);
  font-weight: 700;
}

.subtitle {
  margin: 0;
  font-family: var(--secondary-font);
  font-size: calc(var(--size) * 6);
  font-weight: 700;
}

.subtitle--sm {
  font-size: calc(var(--size) * 5.5);
}

.subtitle--xs {
  font-size: calc(var(--size) * 5);
  font-weight: 600;
}

.subtitle--2xs {
  font-size: calc(var(--size) * 4.5);
  font-weight: 600;
}

.text {
  margin: 0;
  font-family: var(--secondary-font);
  font-size: calc(var(--size) * 4);
  font-weight: 400;
}

.text--sm {
  font-size: calc(var(--size) * 3.5);
}

.text--xs {
  font-size: calc(var(--size) * 3);
  font-weight: 300;
}

.interactive {
  margin: 0;
  font-family: var(--primary-font);
  font-size: calc(var(--size) * 3.5);
  font-weight: 600;
}

.interactive--2xl {
  font-size: calc(var(--size) * 5);
  font-weight: 700;
}

.interactive--xl {
  font-size: calc(var(--size) * 4.5);
  font-weight: 700;
}

.interactive--lg {
  font-size: calc(var(--size) * 4);
}

.interactive--sm {
  font-size: calc(var(--size) * 3);
}

.interactive--xs {
  font-size: calc(var(--size) * 2.5);
  font-weight: 500;
}

.img {
  display: block;
  object-fit: cover;
}

.img--logo {
  height: calc(var(--size) * 8);
  width: auto;
}

.img--background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  inset: 0;
  opacity: 0.5;
}

.link {
  position: relative;
  color: var(--primary-text);
  text-decoration: none;
  transition: color var(--transition-duration);

  &::before {
    content: "";
    position: absolute;
    bottom: -0.125em;
    width: 100%;
    height: 0.0625em;
    background-color: var(--primary-color);
    transform: scale(0);
    transition: transform var(--transition-duration);
  }

  &:hover {
    color: var(--primary-color);

    &::before {
      transform: scale(1);
    }
  }
}

.button {
  --primary-button-color: var(--primary-background);
  --primary-button-text: var(--primary-text);
  padding: 0.5em 1em;
  border: calc(var(--size) * 0.125) solid var(--primary-button-color);
  border-radius: calc(var(--size) * 2);
  background-color: var(--primary-button-color);
  color: var(--primary-button-text);
  cursor: pointer;
  text-decoration: none;
  font-family: var(--primary-font);
  transition: box-shadow var(--transition-duration), filter var(--transition-duration);

  &:hover {
    box-shadow: 0 0 calc(var(--size) * 2) var(--primary-button-color);
    filter: opacity(0.875);
  }
}

.button--primary {
  --primary-button-color: var(--primary-color);
  --primary-button-text: var(--light-primary-text);
}

.button--outline-primary {
  background-color: transparent;
  --primary-button-color: var(--primary-color);
  --primary-button-text: var(--primary-text);
}

.badge {
  --primary-badge-color: var(--primary-background);
  --primary-badge-text: var(--primary-text);
  padding: 0.25em 0.5em;
  border-radius: calc(var(--size) * 2);
  background-color: var(--primary-badge-color);
  color: var(--primary-badge-text);
}

.badge--primary {
  --primary-badge-color: var(--primary-color);
  --primary-badge-text: var(--light-primary-text);
}
```

---

**🛠️ `src/css/modules/utils.css`**

🔧📏 Helper utility classes for spacing, positioning, flexbox, colors, and text.

```css
.p-relative {
  position: relative;
}

.p-absolute {
  position: absolute;
}

.t-2 {
  top: calc(var(--size) * 2);
}

.r-2 {
  right: calc(var(--size) * 2);
}

.d-flex {
  display: flex;
}

.f-direction-column {
  flex-direction: column;
}

.a-items-center {
  align-items: center;
}

.j-content-start {
  justify-content: flex-start;
}

.j-content-end {
  justify-content: flex-end;
}

.j-content-center {
  justify-content: center;
}

.j-content-between {
  justify-content: space-between;
}

.f-wrap {
  flex-wrap: wrap;
}

.g-1 {
  gap: var(--size);
}

.g-2 {
  gap: calc(var(--size) * 2);
}

.g-4 {
  gap: calc(var(--size) * 4);
}

.g-5 {
  gap: calc(var(--size) * 5);
}

.g-8 {
  gap: calc(var(--size) * 8);
}

.g-10 {
  gap: calc(var(--size) * 10);
}

.f-1 {
  flex: 1;
}

.f-2 {
  flex: 2;
}

.m-top-auto {
  margin-top: auto;
}

.c-primary {
  color: var(--primary-color);
}

.c-secondary {
  color: var(--secondary-color);
}

.c-white {
  color: var(--white-color);
}

.c-warning {
  color: var(--warning-color);
}

.c-shadow {
  color: var(--shadow);
}

.c-secondary-text {
  color: var(--secondary-text);
}

.f-weight-700 {
  font-weight: 700;
}

.t-align-center {
  text-align: center;
}

@media (width >=768px) {
  .md\:d-none {
    display: none;
  }
}
```


---

**🔧 `src/css/index.css`**

📥✨ Entry point for all CSS modules — import and organize styles in order.

```css
@import url("./modules/properties.css");
@import url("./modules/variables.css");
@import url("./modules/keyframes.css");
@import url("./modules/globals.css");
@import url("./modules/layout.css");
@import url("./modules/components.css");
@import url("./modules/elements.css");
@import url("./modules/utils.css");
```

**🧠 Architecture Benefits:**
- 💪 **Powerful, scalable, and ready** to deliver professional UI experience
- 🔄 **Modular structure** allows for easy maintenance and updates
- ⚡ **Performance optimized** with efficient CSS organization

---

### Step 2: TypeScript Types - Movie Data Structure

Split core application types into organized, maintainable modules for better code structure and developer experience! 📁✨

**📁 Folder Structure:**
```
src/shared/types/ 📂
├── movie.types.ts 🎭
└── tmdb.types.ts 🌐
```

**✅ Features:**
- 🎭 Core movie interface for cinema app
- 🧩 Component props interfaces  
- 📊 Rating system types
- 🌐 TMDB API response interfaces
- 🛡️ Strong typing for data consistency

**🧩 Code:**

**🎭 `src/shared/types/movie.types.ts`**

```typescript
export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: string;
  releaseDate: string;
  poster: string;
  genres: Genre[];
  showTimes: string[];
  rating: number;
}

export interface Genre {
  id: number;
  name: string;
}
```

**🌐 `src/shared/types/tmdb.types.ts`**

```typescript
export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBNowPlayingResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBGenresResponse {
  genres: TMDBGenre[];
}
```

**🧠 Architecture Benefits:**
- **Separation of Concerns** 🎯 Internal vs external API types
- **Maintainability** 🔧 Easy updates when APIs change  
- **Code Organization** 📂 Clear type boundaries
- **Import Clarity** 📦 Know exactly what you're importing
- **Scalability** 🚀 Add new API types without cluttering

---

### Step 3: Movie Data - TMDB Mock Data

Real-world movie data from TMDB API formatted for TypeScript. This provides realistic content for development and testing! 🎬📊

**📁 File Path:** `src/shared/mocks/tmdb.mock.ts`

**✅ Features:**
- 🎞️ Real TMDB movie data
- 🛡️ TypeScript-safe data structure
- 🛠️ Utility functions for data transformation
- 🎭 Genre mapping with fallbacks

**🧩 Code:**

```typescript
import type { TMDBGenresResponse, TMDBNowPlayingResponse } from "../types/tmdb.types";

export const tmdbNowPlayingMock: TMDBNowPlayingResponse = {
  "dates": {
    "maximum": "2025-09-24",
    "minimum": "2025-08-13"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
      "genre_ids": [
        16,
        28,
        14,
        53
      ],
      "id": 1311031,
      "original_language": "ja",
      "original_title": "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来",
      "overview": "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
      "popularity": 850.6515,
      "poster_path": "/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
      "release_date": "2025-07-18",
      "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
      "video": false,
      "vote_average": 7.637,
      "vote_count": 248
    },
    {
      "adult": false,
      "backdrop_path": "/wJ20rOZ1VgkCqv1jeOQB2Brny9k.jpg",
      "genre_ids": [
        27,
        9648
      ],
      "id": 1078605,
      "original_language": "en",
      "original_title": "Weapons",
      "overview": "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
      "popularity": 400.3399,
      "poster_path": "/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
      "release_date": "2025-08-04",
      "title": "Weapons",
      "video": false,
      "vote_average": 7.395,
      "vote_count": 1372
    },
    {
      "adult": false,
      "backdrop_path": "/fq8gLtrz1ByW3KQ2IM3RMZEIjsQ.jpg",
      "genre_ids": [
        27
      ],
      "id": 1038392,
      "original_language": "en",
      "original_title": "The Conjuring: Last Rites",
      "overview": "Paranormal investigators Ed and Lorraine Warren take on one last terrifying case involving mysterious entities they must confront.",
      "popularity": 375.5061,
      "poster_path": "/29ES27icY5CzTcMhlz1H4SdQRod.jpg",
      "release_date": "2025-09-03",
      "title": "The Conjuring: Last Rites",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 337
    },
    {
      "adult": false,
      "backdrop_path": "/mEW9XMgYDO6U0MJcIRqRuSwjzN5.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1007734,
      "original_language": "en",
      "original_title": "Nobody 2",
      "overview": "Former assassin Hutch Mansell takes his family on a nostalgic vacation to a small-town theme park, only to be pulled back into violence when they clash with a corrupt operator, a crooked sheriff, and a ruthless crime boss.",
      "popularity": 312.21,
      "poster_path": "/svXVRoRSu6zzFtCzkRsjZS7Lqpd.jpg",
      "release_date": "2025-08-13",
      "title": "Nobody 2",
      "video": false,
      "vote_average": 7.279,
      "vote_count": 541
    },
    {
      "adult": false,
      "backdrop_path": "/kzeBfhXMRWiykBsqoL3UbfaM0S.jpg",
      "genre_ids": [
        35,
        28,
        80
      ],
      "id": 1035259,
      "original_language": "en",
      "original_title": "The Naked Gun",
      "overview": "Only one man has the particular set of skills... to lead Police Squad and save the world: Lt. Frank Drebin Jr.",
      "popularity": 206.6359,
      "poster_path": "/rmwQ8GsdQ1M3LtemNWLErle2nBU.jpg",
      "release_date": "2025-07-30",
      "title": "The Naked Gun",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 664
    },
    {
      "adult": false,
      "backdrop_path": "/w3Bi0wygeFQctn6AqFTwhGNXRwL.jpg",
      "genre_ids": [
        16,
        35,
        14,
        10402
      ],
      "id": 803796,
      "original_language": "en",
      "original_title": "KPop Demon Hunters",
      "overview": "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
      "popularity": 159.4997,
      "poster_path": "/22AouvwlhlXbe3nrFcjzL24bvWH.jpg",
      "release_date": "2025-06-20",
      "title": "KPop Demon Hunters",
      "video": false,
      "vote_average": 8.323,
      "vote_count": 1405
    },
    {
      "adult": false,
      "backdrop_path": "/vHTFrcqJoCi1is3XN0PZe2LSnI2.jpg",
      "genre_ids": [
        14,
        10751,
        28,
        12
      ],
      "id": 1087192,
      "original_language": "en",
      "original_title": "How to Train Your Dragon",
      "overview": "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
      "popularity": 156.8141,
      "poster_path": "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
      "release_date": "2025-06-06",
      "title": "How to Train Your Dragon",
      "video": false,
      "vote_average": 8.03,
      "vote_count": 1908
    },
    {
      "adult": false,
      "backdrop_path": "/uBB1aMga5ngZxsUQL5k36zeW3pB.jpg",
      "genre_ids": [
        27,
        10749
      ],
      "id": 1242011,
      "original_language": "en",
      "original_title": "Together",
      "overview": "With a move to the countryside already testing the limits of a couple's relationship, a supernatural encounter begins an extreme transformation of their love, their lives, and their flesh.",
      "popularity": 133.7435,
      "poster_path": "/m52XidzKx94bKlToZfEXUnL3pdy.jpg",
      "release_date": "2025-07-28",
      "title": "Together",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 422
    },
    {
      "adult": false,
      "backdrop_path": "/2nwhxEyefcIFKwOrSigiamoIzu2.jpg",
      "genre_ids": [
        28,
        53,
        18
      ],
      "id": 1119878,
      "original_language": "en",
      "original_title": "Ice Road: Vengeance",
      "overview": "Big rig ice road driver Mike McCann travels to Nepal to scatter his late brother’s ashes on Mt. Everest. While on a packed tour bus traversing the deadly 12,000 ft. terrain of the infamous Road to the Sky, McCann and his mountain guide encounter a group of mercenaries and must fight to save themselves, the busload of innocent travelers, and the local villagers’ homeland.",
      "popularity": 130.1217,
      "poster_path": "/cQN9rZj06rXMVkk76UF1DfBAico.jpg",
      "release_date": "2025-06-27",
      "title": "Ice Road: Vengeance",
      "video": false,
      "vote_average": 6.473,
      "vote_count": 371
    },
    {
      "adult": false,
      "backdrop_path": "/jvpkBenB6hv19WWYVlaiow8zklq.jpg",
      "genre_ids": [
        16,
        10751,
        35,
        80,
        12
      ],
      "id": 1175942,
      "original_language": "en",
      "original_title": "The Bad Guys 2",
      "overview": "The now-reformed Bad Guys are trying (very, very hard) to be good, but instead find themselves hijacked into a high-stakes, globe-trotting heist, masterminded by a new team of criminals they never saw coming: The Bad Girls.",
      "popularity": 120.9973,
      "poster_path": "/26oSPnq0ct59l07QOXZKyzsiRtN.jpg",
      "release_date": "2025-07-24",
      "title": "The Bad Guys 2",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 369
    },
    {
      "adult": false,
      "backdrop_path": "/i8QHgJKnsd8csNBo8fH9wYW2Y9E.jpg",
      "genre_ids": [
        10749,
        35
      ],
      "id": 1321439,
      "original_language": "en",
      "original_title": "The Wrong Paris",
      "overview": "Dawn thinks she's joining a dating show in Paris, France, only to land in Paris, Texas. She has an exit plan — until sparks fly with the cowboy bachelor.",
      "popularity": 120.4577,
      "poster_path": "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg",
      "release_date": "2025-09-11",
      "title": "The Wrong Paris",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 82
    },
    {
      "adult": false,
      "backdrop_path": "/xSD0q1FiuZkvHuy7uscOLbmd1hR.jpg",
      "genre_ids": [
        12,
        28,
        14
      ],
      "id": 13494,
      "original_language": "en",
      "original_title": "Red Sonja",
      "overview": "A young girl rises from the ashes of tragedy to become the most feared warrior woman of all time: the She-Devil with a Sword.",
      "popularity": 106.9063,
      "poster_path": "/l10eghFN1nQmWwMSt91MlLvZZFA.jpg",
      "release_date": "2025-07-31",
      "title": "Red Sonja",
      "video": false,
      "vote_average": 5.651,
      "vote_count": 86
    },
    {
      "adult": false,
      "backdrop_path": "/8jeDyvFQKgss36FbGAmGQVzPXlH.jpg",
      "genre_ids": [
        53,
        28,
        35
      ],
      "id": 1151334,
      "original_language": "en",
      "original_title": "Eenie Meanie",
      "overview": "A former teenage getaway driver gets dragged back into her unsavory past when a former employer offers her a chance to save the life of her chronically unreliable ex-boyfriend.",
      "popularity": 106.1715,
      "poster_path": "/12Va3oO3oYUdOd75zM57Nx1976a.jpg",
      "release_date": "2025-08-21",
      "title": "Eenie Meanie",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 189
    },
    {
      "adult": false,
      "backdrop_path": "/yth78N88nwokepnOe5atwPGfTL1.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 1382406,
      "original_language": "zh",
      "original_title": "惊天大营救",
      "overview": "A veteran Muay Thai expert goes on a take-no-prisoners mission of revenge after his wife and daughter are brutally murdered by mysterious forces.",
      "popularity": 98.5179,
      "poster_path": "/nML8rOI4GOiiEsXgknuhZeUF8M7.jpg",
      "release_date": "2024-12-05",
      "title": "Striking Rescue",
      "video": false,
      "vote_average": 7.556,
      "vote_count": 116
    },
    {
      "adult": false,
      "backdrop_path": "/94KROr9xO9u5Tq5gTdCJlVRRfhm.jpg",
      "genre_ids": [
        53,
        80,
        18
      ],
      "id": 1242434,
      "original_language": "en",
      "original_title": "Highest 2 Lowest",
      "overview": "When a titan music mogul, widely known as having the \"best ears in the business\", is targeted with a ransom plot, he is jammed up in a life-or-death moral dilemma.",
      "popularity": 90.4211,
      "poster_path": "/kOzwIr0R7WhaFgoYUZFLPZA2RBZ.jpg",
      "release_date": "2025-08-14",
      "title": "Highest 2 Lowest",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 220
    },
    {
      "adult": false,
      "backdrop_path": "/7U6sslMcPXPs9MIH5IvAl8ttTth.jpg",
      "genre_ids": [
        53,
        878,
        27
      ],
      "id": 1530127,
      "original_language": "en",
      "original_title": "Lookout",
      "overview": "Seeking peace away from her turbulent life, a young woman accepts a job as a fire lookout at a remote wilderness tower. As she settles into her new role, eerie disturbances and strange occurrences begin to unfold, and she must uncover the chilling secrets that disrupt her isolation before it’s too late.",
      "popularity": 84.4383,
      "poster_path": "/nlMsTk94ylLywUdDWsOqwBDi19l.jpg",
      "release_date": "2025-09-02",
      "title": "Lookout",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 5
    },
    {
      "adult": false,
      "backdrop_path": "/sItIskd5xpiE64bBWYwZintkGf3.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 541671,
      "original_language": "en",
      "original_title": "Ballerina",
      "overview": "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma.",
      "popularity": 95.4109,
      "poster_path": "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
      "release_date": "2025-06-04",
      "title": "Ballerina",
      "video": false,
      "vote_average": 7.376,
      "vote_count": 1644
    },
    {
      "adult": false,
      "backdrop_path": "/fMlAg1CyHTsCktwQrp74rl9RMwJ.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 138843,
      "original_language": "en",
      "original_title": "The Conjuring",
      "overview": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
      "popularity": 88.4779,
      "poster_path": "/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
      "release_date": "2013-07-18",
      "title": "The Conjuring",
      "video": false,
      "vote_average": 7.541,
      "vote_count": 12158
    },
    {
      "adult": false,
      "backdrop_path": "/28zX1DO1NJWeS1e573lSJQ9kiVh.jpg",
      "genre_ids": [
        53,
        27
      ],
      "id": 604079,
      "original_language": "en",
      "original_title": "The Long Walk",
      "overview": "In a dystopian, alternate-America ruled by a totalitarian regime, 50 teenage boys take part in a deadly annual walking contest, forced to maintain a minimum pace or be executed, until only one survivor remains.",
      "popularity": 87.3677,
      "poster_path": "/wobVTa99eW0ht6c1rNNzLkazPtR.jpg",
      "release_date": "2025-09-10",
      "title": "The Long Walk",
      "video": false,
      "vote_average": 7.288,
      "vote_count": 80
    },
    {
      "adult": false,
      "backdrop_path": "/dcLV5rEXuQRW0ZlB7IMLArHMyWh.jpg",
      "genre_ids": [
        35,
        14,
        10751
      ],
      "id": 1125257,
      "original_language": "en",
      "original_title": "Freakier Friday",
      "overview": "Years after Tess and Anna endured an identity crisis, Anna now has a daughter of her own and a soon-to-be stepdaughter. As they navigate the myriad challenges that come when two families merge, Tess and Anna discover lightning might indeed strike twice.",
      "popularity": 76.6737,
      "poster_path": "/9wV65OmsjLAqBfDnYTkMPutXH8j.jpg",
      "release_date": "2025-08-06",
      "title": "Freakier Friday",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 169
    }
  ],
  "total_pages": 248,
  "total_results": 4953
};

export const tmdbGenresMock: TMDBGenresResponse = {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
};
```

**🧠 Architecture Benefits:**
- **Real movie content** 🎬 for authentic development experience
- **Type-safe** 🛡️ data structure prevents runtime errors
- **Genre mapping** 🎭 provides human-readable categories
- **Scalable structure** 🚀 ready for real API integration

---

### Step 4: Utility Functions - Data Transformation

Complete the data pipeline with utility functions for transforming TMDB data into our internal Movie format! 🔄⚡

**📁 File Path:** `src/utils/movie.utils.ts`

**✅ Features:**
- 🔄 TMDB to internal Movie data transformation
- 🖼️ Dynamic image URL generation with fallbacks
- 🎬 Mock data integration for development
- 🛡️ Error handling and type safety throughout
- 🎲 Random data generation for enhanced realism

**🧩 Code:**

```typescript
import { tmdbGenresMock, tmdbNowPlayingMock } from "../shared/mocks/tmdb.mock";
import type { Movie } from "../shared/types/movie.types";
import type { TMDBMovie } from "../shared/types/tmdb.types";

export const getImageUrl = (size = 'w342', path: string | null): string => {
  if (!path) return `https://picsum.photos/342/513?random=${Math.floor(Math.random() * 1000)}`;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const generateRandomDuration = (): string => {
  const durations = [
    '85 min', '90 min', '95 min', '100 min', '105 min', '110 min', '115 min', '120 min',
    '125 min', '130 min', '135 min', '140 min', '145 min', '150 min', '155 min', '160 min'
  ];
  return durations[Math.floor(Math.random() * durations.length)];
};

const createGenreMap = () => {
  const genreMap: Record<number, { id: number; name: string }> = {};
  tmdbGenresMock.genres.forEach(genre => {
    genreMap[genre.id] = { id: genre.id, name: genre.name };
  });
  return genreMap;
};

const genreMap = createGenreMap();

const getMovieGenres = (genreIds: number[]) => {
  return genreIds
    .map(id => genreMap[id])
    .filter(Boolean);
};

const generateRandomShowTimes = (): string[] => {
  const allTimes = ['1:00 PM', '2:30 PM', '4:00 PM', '5:45 PM', '7:15 PM', '9:00 PM', '10:30 PM', '11:30 PM'];
  const shuffled = allTimes.sort(() => Math.random() - 0.5);
  const numTimes = Math.floor(Math.random() * 4) + 3;
  return shuffled.slice(0, numTimes);
};

export const adaptTmdbToMovie = (tmdbMovie: TMDBMovie): Movie => {
  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    description: tmdbMovie.overview,
    duration: generateRandomDuration(),
    releaseDate: tmdbMovie.release_date,
    poster: getImageUrl('w342', tmdbMovie.poster_path),
    genres: getMovieGenres(tmdbMovie.genre_ids),
    showTimes: generateRandomShowTimes(),
    rating: Math.round(tmdbMovie.vote_average) / 2,
  };
};

export const adaptTmdbMovies = (tmdbMovies: TMDBMovie[]): Movie[] => {
  return tmdbMovies.map(adaptTmdbToMovie);
};

export const getMoviesFromMockData = (): Movie[] => {
  return adaptTmdbMovies(tmdbNowPlayingMock.results);
};
```

**🧠 Architecture Benefits:**
- **Data Transformation** 🔄 Clean separation between external and internal data models
- **Error Resilience** 🛡️ Fallback mechanisms for missing images and data
- **Development Experience** 🛠️ Mock data integration for rapid prototyping
- **Type Safety** 🔒 End-to-end type checking from API to UI components

---

### Step 5: Header Component - Navigation Bar

Build a professional, responsive header for the cinema app. Features clean navigation, branding, and mobile-friendly design! 🎬✨

**📁 File Path:** `src/ui/components/layouts/Header.tsx`

**✅ Features:**
- 🧭 Professional navigation structure
- 📱 Mobile-responsive off-canvas menu
- 🎨 Branded logo and title integration
- ♿ Accessible link elements and ARIA support
- 🔗 Clean semantic HTML structure

**🧩 Code:**

```tsx
const Header = () => {
  return (
    <header className="header">
      <nav className="nav nav--scroll">
        <div className="container d-flex a-items-center">
          <div className="f-1 d-flex j-content-start">
            <a href="#" className="link d-flex a-items-center g-2">
              <img src="/logo.svg" alt="Cine SpoilerS Logo" width="32" height="32" className="img img--logo" />
              <h2 className="interactive interactive--lg c-primary">Cine SpoilerS</h2>
            </a>
          </div>

          <div className="off-canvas off-canvas--right off-canvas--mobile" id="menu">
            <a href="#" className="off-canvas__backdrop"></a>
            <div className="off-canvas__child">
              <ul className="f-2 list flexbox flexbox--center flexbox--responsive g-8">
                <li><a href="#now-showing" className="link interactive">🎬 Movies</a></li>
                <li><a href="#cinemas" className="link interactive">🏢 Cinemas</a></li>
                <li><a href="#promotions" className="link interactive">🎁 Promotions</a></li>
                <li><a href="#tickets" className="link interactive">🎫 My Tickets</a></li>
                <li><a href="#ar" className="link interactive">📱 AR Posters</a></li>
              </ul>
            </div>
          </div>

          <div className="f-1 d-flex a-items-center j-content-end g-2">
            <a href="#signin" className="button button--primary interactive interactive--sm">
              💕 Sign In
            </a>
            <a href="#menu" className="link interactive interactive--2xl md:d-none">
              📚
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
```

**🧠 Architecture Benefits:**
- **Component Isolation** 🏗️ Self-contained navigation logic
- **Responsive Design** 📱 Mobile-first approach with off-canvas menu
- **Semantic Structure** 📋 Proper HTML hierarchy for accessibility
- **Reusability** 🔄 Easy to integrate across different layouts
- **Maintainability** 🔧 Clean component structure for future updates

---

### Step 6: Footer Component - Contact & Info

Create a comprehensive footer with dynamic content. Includes branding, navigation links, and copyright information! 📬🌟

**📁 File Path:** `src/ui/components/layouts/Footer.tsx`

**✅ Features:**
- 📅 Dynamic copyright year calculation
- 🌐 Multiple navigation sections with links
- 📱 Social media integration
- 🎨 Responsive grid layout structure
- 🔗 External links with proper attributes

**🧩 Code:**

```tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <nav className="nav">
        <div className="container g-layout g-layout--auto-fit-columns g-10">
          <div className="d-flex f-direction-column g-2">
            <a href="#">
              <img
                src="/logo.svg"
                alt="Cine SpoilerS Logo"
                width="32"
                height="32"
                className="img img--logo"
              />
            </a>
            <h2 className="interactive interactive--lg c-primary">
              Cine SpoilerS
            </h2>
            <p className="text text--xs c-secondary-text">
              AI-powered cinema experience. See everything about movies without spoilers! 🎬✨
            </p>
          </div>

          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Showtimes</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li>
                <a href="#now-showing" className="link interactive interactive--sm c-secondary-text">
                  🎞️ Now Showing
                </a>
              </li>
              <li>
                <a href="#coming-soon" className="link interactive interactive--sm c-secondary-text">
                  🔜 Coming Soon
                </a>
              </li>
              <li>
                <a href="#premieres" className="link interactive interactive--sm c-secondary-text">
                  🌟 Premiere Events
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Explore</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li>
                <a href="#faq" className="link interactive interactive--sm c-secondary-text">
                  ❓ FAQs
                </a>
              </li>
              <li>
                <a href="#about" className="link interactive interactive--sm c-secondary-text">
                  📖 About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="link interactive interactive--sm c-secondary-text">
                  📝 Cinema Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Connect</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li>
                <a
                  href="https://www.instagram.com/elliotgaramendi/"
                  className="link interactive interactive--sm c-secondary-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/elliotgaramendi"
                  className="link interactive interactive--sm c-secondary-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦 Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@elliotgaramendi"
                  className="link interactive interactive--sm c-secondary-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎥 YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="nav">
        <div className="container flexbox flexbox--centered-spacing flexbox--responsive g-2">
          <h2 className="interactive interactive--xs">
            <a
              href="https://www.linkedin.com/in/elliotgaramendi/"
              className="link interactive interactive--xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elliot Garamendi
            </a>
            &copy; {currentYear} Cine SpoilerS. All rights reserved.
          </h2>
          <h2 className="interactive interactive--xs">
            Made with ❤️ by: <a href="https://www.instagram.com/elliotgaramendi/" className="link interactive interactive--xs">
              Elliot Garamendi
            </a> for movie lovers! 🍿
          </h2>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
```

**🧠 Architecture Benefits:**
- **Dynamic Content** 📅 Automatic year updates without manual changes
- **Organized Navigation** 🗂️ Structured link categories for better UX
- **External Link Safety** 🔒 Proper rel attributes for security
- **Grid Layout** 📐 Responsive design that adapts to screen sizes
- **Brand Consistency** 🎨 Maintains design system throughout

---

### Step 7: Hero Component - Highlight Banner

Create an impactful hero section that welcomes users to the spoiler-free cinema experience! Features bold typography and compelling CTAs. 🎬🚪

**📁 File Path:** `src/ui/components/modules/Hero.tsx`

**✅ Features:**
- 🎯 Compelling headline with brand positioning
- 🌈 Highlighted brand colors and visual hierarchy  
- 🔘 Call-to-action buttons for user engagement
- 📱 Responsive design with centered content
- 🎬 Cinema-focused messaging and emojis

**🧩 Code:**

```tsx
const Hero = () => {
  return (
    <article className="hero">
      <div className="container d-flex f-direction-column a-items-center g-4">
        <h1 className="hero__title t-align-center">
          🎥 Explore spoiler-free cinema with <span className="c-primary">AI-Powered insights ✨</span>
        </h1>
        <p className="hero__paragraph t-align-center">
          👋 Welcome to <span className="f-weight-700">Cine SpoilerS</span> 🍿 where you can see everything about movies without the spoilers 🚫. Discover premieres 🌟, reviews 📝, and interactive AR experiences 🔍
        </p>
        <div className="d-flex g-4">
          <a
            href="#now-showing"
            className="button button--primary interactive interactive--xl"
          >
            🎬 Now Showing
          </a>
          <a
            href="#coming-soon"
            className="button button--outline-primary interactive interactive--xl"
          >
            🔮 Coming Soon
          </a>
        </div>
      </div>
    </article>
  );
};

export default Hero;
```

**🧠 Architecture Benefits:**
- **Visual Hierarchy** 🎨 Clear content structure with proper heading levels
- **Action-Oriented** 🎯 Strategic CTA placement for user conversion
- **Brand Integration** 🏷️ Consistent messaging with app identity
- **Accessibility** ♿ Semantic HTML structure for screen readers
- **Responsive Layout** 📱 Flexible design across all devices

---

### Step 8: Rating Component - Star Display

Build a beautiful, reusable star rating component for displaying movie ratings with visual feedback! Perfect for showing user and critic scores. 🌟📊

**📁 File Path:** `src/ui/components/widgets/Rating.tsx`

**✅ Features:**
- ⭐ Dynamic star calculation and rendering
- 🎨 Visual distinction between full, half, and empty stars
- 🔧 Configurable maximum rating scale
- 📊 Numeric rating display alongside stars
- ♿ Accessible rating information

**🧩 Code:**

```tsx
interface RatingProps {
  value: number;
  maxValue?: number;
}

const Rating = ({ value, maxValue = 5 }: RatingProps) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = maxValue - Math.ceil(value);

  return (
    <div className="d-flex a-items-center g-2">
      <div className="d-flex a-items-center g-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-star-${i}`} className="interactive interactive--lg c-warning">★</span>
        ))}
        {hasHalfStar && (<span className="interactive interactive--lg">✫</span>)}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-star-${i}`} className="interactive interactive--lg">☆</span>
        ))}
      </div>

      <span className="interactive interactive--sm c-secondary-text">
        {value.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;
```

**🧠 Architecture Benefits:**
- **Reusable Logic** 🔄 Works with any rating scale and precision
- **Visual Clarity** 👁️ Instant rating comprehension through star icons
- **Mathematical Precision** 🔢 Accurate star calculations for any rating
- **Flexible Configuration** ⚙️ Customizable maximum values for different scales
- **Performance Optimized** ⚡ Efficient array rendering with proper keys

---

### Step 9: MovieCard Component - Movie Display

Create a stunning movie card component that showcases all movie details! Features poster, rating, genre, and interactive showtimes. 🎬📋

**📁 File Path:** `src/ui/components/components/MovieCard.tsx`

**✅ Features:**
- 🖼️ Movie poster with lazy loading optimization
- ⭐ Integrated Rating component for visual appeal
- 🎭 Genre badge with prominent positioning
- ⏰ Interactive showtime selection buttons
- 📝 Smart description truncation for card layout

**🧩 Code:**

```tsx
import type { Movie } from "../../../shared/types/movie.types";
import Rating from "../widgets/Rating";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, description, duration, genres, poster, showTimes, rating } = movie;

  return (
    <article className="card d-flex f-direction-column">
      <div className="p-relative">
        <img
          src={poster}
          alt={`${title} movie poster`}
          width="180"
          height="320"
          loading="lazy"
          className="card__image"
        />
        <span className="badge badge--primary interactive p-absolute t-2 r-2 f-weight-700">{genres[0].name}</span>
      </div>

      <div className="card__body f-1 g-2">
        <h3 className="title title--2xs">{title}</h3>
        <div className="d-flex a-items-center g-2">
          <Rating value={rating} />
          <span className="interactive c-secondary">{duration}</span>
        </div>
        <p className="text text--sm c-shadow">{description.slice(0, 128)}...</p>
        <div className="d-flex f-direction-column g-2 m-top-auto">
          <h4 className="subtitle subtitle--2xs c-primary">Today's Showtimes ⏰</h4>
          <div className="d-flex f-wrap g-2">
            {showTimes.map((time, index) => (
              <a
                key={index}
                className="button button--outline-primary interactive interactive--sm"
                aria-label={`Book showtime ${time} for ${title}`}
              >
                {time}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
```

**🧠 Architecture Benefits:**
- **Component Composition** 🧩 Integrates Rating component for code reuse
- **Performance Optimization** ⚡ Lazy loading images for better page speed
- **User Experience** 🎯 Interactive elements with proper accessibility
- **Content Management** 📝 Smart text truncation maintains layout integrity
- **Design Consistency** 🎨 Follows established card pattern across app

---

### Step 10: MovieGrid Component - Grid Section

Display your movie collection in a responsive grid layout! Renders MovieCard components dynamically with proper empty states. 🎬📱

**📁 File Path:** `src/ui/components/modules/MovieGrid.tsx`

**✅ Features:**
- 📊 Dynamic movie grid with responsive layout
- 🎬 Section header with compelling messaging
- 🎭 Empty state handling for no movies scenario
- 🧩 MovieCard integration for consistent display
- 📱 Auto-fit grid columns for all screen sizes

**🧩 Code:**

```tsx
import type { Movie } from '../../../shared/types/movie.types';
import MovieCard from '../components/MovieCard';

export interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <section id="now-showing" className="section">
      <div className="container d-flex f-direction-column g-8">
        <div className="d-flex f-direction-column a-items-center g-2">
          <h2 className="title c-primary t-align-center">
            Now Showing 🎬
          </h2>
          <p className="text text--lg c-secondary-text t-align-center">
            Discover the latest movies without spoilers - see everything you need to know!
          </p>
        </div>

        <div className="g-layout g-layout--auto-fit-columns g-8">
          {movies.length > 0 ? (
            movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <div className="d-flex f-direction-column a-items-center g-4">
              <p className="text c-secondary-text">
                🎭 No movies available right now
              </p>
              <p className="text c-secondary-text">
                Check back soon for the latest releases!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;
```

**🧠 Architecture Benefits:**
- **Conditional Rendering** 🎯 Graceful handling of empty states
- **Grid Responsiveness** 📱 Automatic column adjustment for different screens
- **Component Reusability** 🔄 Clean separation between list and card logic
- **Content Strategy** 📝 Clear messaging that aligns with brand promise
- **Performance Efficiency** ⚡ Optimal rendering with proper key props

---

### Step 11: App Component - Main Orchestrator

The central component that orchestrates your entire application! Combines all components and manages the overall layout structure. 🎬🔧

**📁 File Path:** `src/App.tsx`

**✅ Features:**
- 🏗️ Complete application layout orchestration
- 📦 Component composition with proper hierarchy
- 🎬 Movie data integration and management
- 🌐 Semantic HTML structure with main content area
- 🔧 Clean imports and component organization

**🧩 Code:**

```tsx
import type { Movie } from "./shared/types/movie.types";
import Footer from "./ui/components/layouts/Footer";
import Header from "./ui/components/layouts/Header";
import Hero from "./ui/components/modules/Hero";
import MovieGrid from "./ui/components/modules/MovieGrid";
import { getMoviesFromMockData } from "./utils/movie.utils";

const App = () => {
  const movies: Movie[] = getMoviesFromMockData();

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <MovieGrid movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default App;
```

**🧠 Architecture Benefits:**
- **Single Responsibility** 🎯 App focuses solely on layout composition
- **Data Flow Management** 📊 Centralized movie data distribution
- **Semantic Structure** 📋 Proper HTML landmarks for accessibility
- **Component Hierarchy** 🏗️ Clear parent-child relationships
- **Maintainability** 🔧 Easy to modify layout or add new sections

---

### Step 12: React Entry Point & Final Setup

Configure the React entry point and finalize the application setup! 🚀⚡

**📁 File Path:** `src/main.tsx`

**✅ Features:**
- 🚀 Modern React entry point with strict mode
- 🎨 CSS imports for complete styling
- ⚡ Error handling and development setup
- 🛡️ Type safety throughout the application
- 🔧 Ready for production deployment

**🧩 Code:**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './css/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

**🧠 Architecture Benefits:**
- **Modern React Patterns** ⚡ Latest React APIs with proper error boundaries
- **Development Experience** 🛠️ Strict mode catches potential issues early
- **Performance Optimization** 🚀 Optimized rendering with concurrent features
- **CSS Integration** 🎨 Complete styling system loaded
- **Production Ready** 📦 Configured for deployment and scaling

## 4. Congratulations!

You've successfully built your first **React + TypeScript cinema application** featuring:

- ✅ **Type-safe component architecture** with interfaces
- ✅ **Real TMDB movie data** with proper typing
- ✅ **Responsive design** ready for all devices
- ✅ **Reusable components** (Rating, MovieCard, etc.)
- ✅ **Professional project structure** following best practices
- ✅ **Clean CSS architecture** with semantic classes
- ✅ **Accessible HTML** with proper ARIA labels

**🔧 Your Tech Stack:**
- **React 19** with latest features
- **TypeScript** for type safety
- **Vite** for lightning-fast development
- **CSS Modules** for scalable styling
- **ESLint** for code quality

---

## 5. Next Steps - Group 2 Preview

🚀 **Coming up in Group 2:**

> **"🪝 Hooks Essentials & Interactive Rendering"**
>
> - **useState & useEffect** - Managing component state and side effects
> - **Event handling** - Click, form, and keyboard interactions
> - **Conditional rendering** - Dynamic UI based on state
> - **List rendering** - Dynamic movie lists with filtering
> - **Custom hooks** - Creating reusable stateful logic
> - **Forms & validation** - User input with TypeScript
>
> **🎯 Challenge:** Transform your static movie app into a fully interactive experience with favorites, search, and dynamic filtering!

**🎬 Keep building amazing React applications with TypeScript!** 🚀✨