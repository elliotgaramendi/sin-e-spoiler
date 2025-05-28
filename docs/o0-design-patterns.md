# 🌟 Top 8 Real Design Patterns for Modern Frontend

This guide covers the 8 most relevant and applied design patterns in modern frontend development, especially with React. Each pattern includes a detailed explanation, backend equivalence, and practical examples in React and Node.js.

---

## 1. 🧡 Adapter Pattern

### 📍 *Frontend: Adapter (External to Internal Models)*

### 📍 *Backend: Adapter for transforming APIs or SDKs*

📘 The Adapter pattern transforms external data (such as from an API) into a format your app understands. It separates external structures from your domain model, which improves maintainability, testability, and decoupling from third-party services.

---

### ✅ React (Frontend):

```tsx
// 🔍 adaptTmdbToMovie.js
export const adaptTmdbToMovie = (tmdb) => ({
  id: tmdb.id,
  title: tmdb.title,
  rating: Math.round(tmdb.vote_average) / 2,
  genre: tmdb.genre_ids[0],
  image: getImageUrl("w342", tmdb.poster_path),
  description: tmdb.overview,
  releaseDate: tmdb.release_date
});
```

---

### ✅ Node.js (Backend):

```js
// 🔍 adapters/tmdbAdapter.js
exports.adaptTmdbToMovie = (tmdb) => ({
  id: tmdb.id,
  title: tmdb.title,
  rating: Math.round(tmdb.vote_average) / 2,
  genre: tmdb.genre_ids[0],
  image: getImageUrl("w342", tmdb.poster_path),
  description: tmdb.overview,
  releaseDate: tmdb.release_date
});
```

---

## 2. 🏠 Factory Pattern

### 📍 *Frontend: Component Factory / Dynamic Instantiation*

### 📍 *Backend: Service Factory / Dependency Injection*

📘 The Factory pattern encapsulates the logic for creating objects or components. It allows a single entry point to produce different variants of a component or service, based on a type or condition. This is particularly useful when rendering dynamic UIs like dashboards, cards, or forms.

---

### ✅ React (Frontend):

```tsx
// 🔍 createCardFactory.jsx
import MovieCard from './MovieCard';
import BookCard from './BookCard';

export const createCard = (type, props) => {
  const components = {
    movie: MovieCard,
    book: BookCard
  };

  const Component = components[type];
  return Component ? <Component {...props} /> : null;
};
```

---

### ✅ Node.js (Backend):

```js
// 🔍 factories/loggerFactory.js
exports.createLogger = (env) => {
  if (env === 'dev') return console.log;
  if (env === 'prod') return (msg) => externalService.send(msg);
};
```

---

## 3. 🧬 Strategy Pattern

### 📍 *Frontend: Behavior Injection via Props or Hooks*

### 📍 *Backend: Dynamic Function Dispatch or Validation Strategies*

📘 The Strategy pattern allows you to define a family of algorithms, put each of them in a separate function, and make them interchangeable within components. In React, this is typically used for injecting custom sorting, filtering, validation, or transformation logic.

---

### ✅ React (Frontend):

```tsx
// 🔍 SortList.jsx
export const SortList = ({ items, strategy }) => {
  const sorted = [...items].sort(strategy);
  return sorted.map((item, i) => <div key={i}>{item}</div>);
};
```

---

### ✅ Node.js (Backend):

```js
// 🔍 strategy/sort.js
const strategies = {
  alpha: (a, b) => a.localeCompare(b),
  length: (a, b) => a.length - b.length,
};

exports.sortItems = (items, strategyName) => [...items].sort(strategies[strategyName]);
```

---

## 4. 🛡️ Observer Pattern

### 📍 *Frontend: Subscriptions / Reactive State / Event Listeners*

### 📍 *Backend: Event Emitters / Pub-Sub*

📘 The Observer pattern enables components to react to state changes or events in a decoupled way. This is at the core of reactive programming in React, used with hooks like `useEffect`, stores like Zustand, or even vanilla `addEventListener` for DOM events.

---

### ✅ React (Frontend):

```tsx
// 🔍 useWindowSize.js
import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { width };
};
```

---

### ✅ Node.js (Backend):

```js
// 🔍 events/logger.js
const EventEmitter = require('events');
const logger = new EventEmitter();

logger.on('log', (msg) => {
  console.log('Log entry:', msg);
});

logger.emit('log', 'Server started');
```

---

### ✅ React (Frontend):

```tsx
// 🔍 adaptTmdbToMovie.js
export const adaptTmdbToMovie = (tmdb) => ({
  id: tmdb.id,
  title: tmdb.title,
  rating: Math.round(tmdb.vote_average) / 2,
  genre: tmdb.genre_ids[0],
  image: getImageUrl("w342", tmdb.poster_path),
  description: tmdb.overview,
  releaseDate: tmdb.release_date
});
```

---

### ✅ Node.js (Backend):

```js
// 🔍 adapters/tmdbAdapter.js
exports.adaptTmdbToMovie = (tmdb) => ({
  id: tmdb.id,
  title: tmdb.title,
  rating: Math.round(tmdb.vote_average) / 2,
  genre: tmdb.genre_ids[0],
  image: getImageUrl("w342", tmdb.poster_path),
  description: tmdb.overview,
  releaseDate: tmdb.release_date
});
```

---

...\[content truncated for brevity]...

---

## 5. 🏛️ Command Pattern

### 📍 *Frontend: Encapsulated Actions / Undo Logic*

### 📍 *Backend: Command Queues / Action Executors*

📘 The Command pattern encapsulates an action in an object so it can be parameterized, queued, or undone. It's useful for managing UI workflows, like opening modals, toggling themes, or handling keyboard shortcuts.

---

### ✅ React (Frontend):

```tsx
// 🔍 commands/themeCommands.js
export const themeCommands = {
  setDark: () => setTheme('dark'),
  setLight: () => setTheme('light'),
  toggle: () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark')),
};
```

---

### ✅ Node.js (Backend):

```js
// 🔍 commands/themeCommand.js
let theme = 'light';

exports.setTheme = (mode) => theme = mode;
exports.toggleTheme = () => theme = (theme === 'dark' ? 'light' : 'dark');
exports.getTheme = () => theme;
```

---

## 6. ♻️ State Reducer Pattern

### 📍 *Frontend: Customizable Internal State Control*

### 📍 *Backend: Configurable Behavior Injection*

📘 This pattern allows external control over the internal state logic of a component. It's useful when building highly reusable UI components like toggles, autocompletes, or form inputs that consumers can extend or override.

---

### ✅ React (Frontend):

```tsx
// 🔍 Toggle.jsx
import { useState } from 'react';

export const Toggle = ({ reducer = (prev) => !prev, onToggle }) => {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    const newState = reducer(state);
    setState(newState);
    onToggle?.(newState);
  };

  return <button onClick={handleToggle}>{state ? 'ON' : 'OFF'}</button>;
};
```

---

### ✅ Node.js (Backend):

```js
// 🔍 reducers/toggleReducer.js
exports.toggleWithReducer = (state, reducer = (s) => !s) => reducer(state);
```

---

## 7. 🎓 Decorator Pattern (HOC included)

### 📍 *Frontend: Functional Component Wrapper (HOC)*

### 📍 *Backend: Wrapper Functions / Middleware Enhancers*

📘 This pattern adds behavior to an object or function without modifying its source. In React, Higher-Order Components (HOC) are a common implementation that wraps and enhances components with new props or logic.

---

### ✅ React (Frontend):

```tsx
// 🔍 withLogger.jsx
export const withLogger = (Component) => (props) => {
  console.log('Rendering with props:', props);
  return <Component {...props} />;
};

// Usage
const Profile = ({ name }) => <p>{name}</p>;
export default withLogger(Profile);
```

---

### ✅ Node.js (Backend):

```js
// 🔍 decorators/logger.js
module.exports = (fn) => (...args) => {
  console.log('[LOG]', ...args);
  return fn(...args);
};

// Usage
const greet = (name) => `Hello, ${name}`;
const greetWithLog = require('./logger')(greet);
console.log(greetWithLog('World'));
```

---

## 8. 🔮 Facade Pattern

### 📍 *Frontend: Custom Hooks / Composable APIs*

### 📍 *Backend: Service Aggregator / Simplified Interfaces*

📘 The Facade pattern hides complex operations behind a simple interface. In React, it’s commonly used in custom hooks that combine state, context, and effects into a clean API for components to consume.

---

### ✅ React (Frontend):

```tsx
// 🔍 useMovieData.js
import { useQuery } from 'react-query';
import { useUser } from './useUser';
import { fetchMovie } from './api';

export const useMovieData = (id) => {
  const { data: movie } = useQuery(['movie', id], () => fetchMovie(id));
  const user = useUser();

  return {
    ...movie,
    userRating: user.ratings?.[id] ?? null
  };
};
```

---

### ✅ Node.js (Backend):

```js
// 🔍 services/movieFacade.js
const { fetchMovie } = require('./api');
const { fetchUser } = require('./user');

exports.getMovieData = async (id, userId) => {
  const [movie, user] = await Promise.all([
    fetchMovie(id),
    fetchUser(userId),
  ]);

  return {
    ...movie,
    userRating: user.ratings?.[id] ?? null,
  };
};
```

---

## 📦 Design Patterns in Popular React Libraries

The use of design patterns isn’t limited to your own code. Modern React libraries implement many classic patterns internally. Here's a comparison of some of the most widely used:

### 🔧 Zustand (Minimalist Global State)

| Pattern         | Implementation in Zustand                              |
| --------------- | ------------------------------------------------------ |
| 🛡️ Observer      | `subscribe` and `useStore()` to react to state changes |
| 🔮 Facade        | Custom hooks like `useUserStore`, `useCartStore`       |
| ♻️ State Reducer | Optional mutator customization                         |
| 🤖 Singleton     | Shared store exported as a single module               |

### 📍 React Router

| Pattern    | Implementation                               |
| ---------- | -------------------------------------------- |
| 🔮 Facade   | Hooks like `useNavigate`, `useLocation`      |
| 🧬 Strategy | Route configs, redirects, fallback rendering |
| 🛡️ Observer | Reacts to URL and context changes            |

### ⚛️ TanStack Query

| Pattern    | Implementation                                    |
| ---------- | ------------------------------------------------- |
| 🛡️ Observer | Query listeners update components in real time    |
| 🔮 Facade   | `useQuery`, `useMutation`, `useInfiniteQuery`     |
| 🧬 Strategy | Caching, retries, and refetching are configurable |

### 🧰 Formik (Form Management)

| Pattern    | Implementation                                         |
| ---------- | ------------------------------------------------------ |
| 🛡️ Observer | Tracks form field and error state                      |
| 🔮 Facade   | APIs like `useFormik`, `FormikProvider`, `Field`, etc. |
| 🧬 Strategy | Flexible validators and submission logic               |
| ♻️ Reducer  | Control over `onChange`, `onSubmit`                    |
F
---

These libraries don’t just save development time—they **teach us how to apply design patterns in real-world scenarios**. Understanding them helps you integrate and extend these tools more effectively.
