### Step 11: Update Base CSS I Form, Typography & Utilities 🎨⚙️

---

**📁 File Paths**

- `src/css/modules/components.css`
- `src/css/modules/elements.css`
- `src/css/modules/utils.css`

---

**✅ Features**

- **Responsive Form Container**: `.form` scales up at ≥768px for wider layouts
- **Animated Form Input**: `.form__input` with focus outline, border-color and box-shadow transitions
- **Extended Typography**: new `.text--lg` for larger text headings
- **Secondary Button Variant**: `.button--secondary` mapping to secondary color tokens
- **Position Utility**: `.l-2` for consistent left offset spacing

---

**🧩 Code**

<details>
<summary><code>src/css/modules/components.css</code></summary>

```css
/* … existing .card rules … */

.card__body {
  /* … */
}

/* ↓ Add form styles below .card__body */
.form {
  width: min(calc(var(--size) * 80), 100%);
  display: flex;
  flex-direction: column;

  @media (width >=768px) {
    width: min(calc(var(--size) * 128), 100%);
  }
}

.form__input {
  padding: 0.75em 1.25em;
  border: calc(var(--size) * 0.5) solid var(--primary-color);
  border-radius: var(--border-radius);
  box-shadow:
    0 0 calc(var(--size) * 2) 0 var(--primary-color),
    0 0 calc(var(--size) * 5) 0 var(--secondary-color);
  background-color: transparent;
  font-family: var(--primary-font);
  transition:
    outline var(--transition-duration),
    border-color var(--transition-duration),
    box-shadow var(--transition-duration);

  &:focus {
    outline: calc(var(--size) * 0.0625) solid var(--primary-color);
    border-color: var(--primary-color);
    box-shadow:
      0 0 calc(var(--size) * 4) 0 var(--primary-color),
      0 0 calc(var(--size) * 7) 0 var(--secondary-color);
  }

  &::placeholder {
    color: var(--secondary-text);
  }
}

/* … rest of file … */
```

</details>

<details>
<summary><code>src/css/modules/elements.css</code></summary>

```css
/* … existing .text rules … */

.text {
  /* … */
}

/* ↓ Add .text--lg below .text */
.text--lg {
  font-size: calc(var(--size) * 4.5);
}

/* … existing .button--primary rules … */

/* ↓ Add .button--secondary after .button--primary */
.button--secondary {
  --primary-button-color: var(--secondary-color);
  --primary-button-text: var(--primary-text);
}

/* … rest of file … */
```

</details>

<details>
<summary><code>src/css/modules/utils.css</code></summary>

```css
/* … existing positioning utilities … */

.p-absolute {
  /* … */
}

/* ↓ Add .l-2 within position group below .r-2 */
.l-2 {
  left: calc(var(--size) * 2);
}
```

</details>

---

**🧠 UX Guidelines**

* **Form Layout**: Constrain form width for readability on mobile, expand on tablet/desktop
* **Input Feedback**: Clear focus states (outline + shadow) guide user interactions
* **Typography Scale**: Use `.text--lg` for section headings or important messages
* **Accessible Buttons**: Apply `.button--secondary` for secondary actions, maintain contrast
* **Consistent Spacing**: Utilize `.l-2` (and other utilities) for uniform offsets and positioning

---

### Step 12: Add Reusable Button Component I Children & Variants 🧩🧱🎨

---

**📁 File Path**

```
src/components/elements/Button.jsx
```

---

**✅ Features**

- Accepts flexible `children` prop for text, icons, or mixed content
- Supports `variant` prop mapped to CSS classes for consistent styling
- Full customization with `className`
- Fully accessible with semantic `type` and optional ARIA attributes
- Spreads additional props (`...rest`) for maximum flexibility (e.g., `aria-label`, `data-*`)
- No default no-op handler on `onClick`, allowing it to be optional

---

**🧩 Code**

```jsx
const variantClassMap = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outline: 'button--outline-primary',
};

const Button = ({
  type = 'button',
  variant = '',
  className = '',
  onClick,
  disabled = false,
  children,
  ...rest
}) => {
  const variantClass = variantClassMap[variant] || '';
  return (
    <button
      type={type}
      className={`button ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

**🧠 UX Guidelines**

* Use `children` for natural, flexible button content
* Prefer semantic `type` values (`button`, `submit`, `reset`)
* Pass ARIA attributes via `...rest` for enhanced accessibility
* Allow `onClick` to be optional; don’t provide default empty handlers
* Use BEM-style classes for consistent, maintainable styling

---

### Step 13: Update MovieCard Component I Toggle Favorite with Full Object ❤️🖤

---

**📁 File Path**

```
src/components/components/MovieCard.jsx
```

---

**✅ Features**

* Displays movie poster, genre badge, rating, description, and showtimes
* Heart button toggles favorite state, controlled by parent via full movie object
* Uses reusable `Button` and `Rating` components
* Accessible button with dynamic `aria-label` based on favorite state
* Lazy loads images for performance
* Default no-op function for `onToggleFavorite` prop

---

**🧩 Code**

```jsx
import Button from '../elements/Button';
import Rating from '../widgets/Rating';

const MovieCard = ({ movie, isFavorite, onToggleFavorite = () => { } }) => {
  const { title, rating, genre, duration, image, description, showTimes } = movie;

  return (
    <article className="card d-flex f-direction-column">
      <div className="p-relative">
        <img
          src={image}
          alt={`${title} poster`}
          width="180"
          height="320"
          loading="lazy"
          className="card__image"
        />
        <span className="badge badge--primary interactive p-absolute t-2 l-2 f-weight-700">
          {genre}
        </span>
        <Button
          variant="secondary"
          className="interactive p-absolute t-2 r-2"
          onClick={() => onToggleFavorite(movie)}
          aria-label={isFavorite ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
        >
          {isFavorite ? "❤️" : "🤍"}
        </Button>
      </div>
      <div className="card__body f-1 g-2">
        <h3 className="title title--2xs">{title}</h3>
        <div className="d-flex a-items-center g-2">
          <Rating value={rating} />
          <span className="interactive c-secondary">{duration}</span>
        </div>
        <p className="text text--sm c-shadow">
          {description.slice(0, 256)}...
        </p>
        <div className="d-flex f-direction-column g-2 m-top-auto">
          <h4 className="interactive interactive--lg c-primary">
            Today's Showtimes
          </h4>
          <div className="d-flex f-wrap g-2">
            {showTimes.map((time, index) => (
              <a
                key={index}
                className="button button--outline-primary interactive interactive--sm"
                aria-label={`Show time ${time} for ${title}`}
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

---

**🧠 UX Guidelines**

* Make heart button large and easy to tap
* Use clear and dynamic `aria-label` for screen readers
* Keep favorite icon consistent (❤️ or 🤍)
* Lazy load images to optimize performance

---

### Step 14: Add MovieSearch Component I Controlled Input with Debounce 🔍⌛

---

**📁 File Path**

```
src/components/components/MovieSearch.jsx
```

---

**✅ Features**

* Controlled input with internal state
* Calls `onSearch` prop after 500 ms debounce on typing stop
* Accessible label and placeholder for usability
* Simple, clean design consistent with app

---

**🧩 Code**

```jsx
import { useEffect, useState } from 'react';

const MovieSearch = ({ onSearch }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input.trim());
    }, 500);

    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <form className="form" aria-label="Movie search">
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies..."
        className="form__input interactive interactive--xl t-align-center"
        aria-label="Search movies"
      />
    </form>
  );
};

export default MovieSearch;
```

---

**🧠 UX Guidelines**

* Debounce avoids excessive renders and improves performance
* Use semantic `role="search"` and accessible labels
* Clear placeholder helps users understand purpose
* Controlled input for React state sync

---

### Step 15: Update MovieList Component I Render Conditional with Empty State 🧩

---

**📁 File Path**

```
src/components/modules/MovieList.jsx
```

---

**✅ Features**

* Accepts `id`, `title`, `movies`, `favorites` (array of objects), and `onToggleFavorite` callback
* Renders loading, empty, or movie grid states based on `movies.length`
* Reuses `MovieCard` component with favorite state and toggle handler
* Shows friendly messages when no movies or favorites found

---

**🧩 Code**

```jsx
import MovieCard from '../components/MovieCard';

const MovieList = ({ id, title, movies, favorites = [], onToggleFavorite }) => (
  <section className="section" id={id}>
    <div className="container d-flex f-direction-column g-8">
      <h2 className="title c-primary t-align-center">{title}</h2>

      {movies.length === 0 ? (
        <p className="text text--lg t-align-center">No movies found 😞</p>
      ) : (
        <div className="g-layout g-layout--auto-fit-columns g-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.some((favorite) => favorite.id === movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

export default MovieList;
```

---

**🧠 UX Guidelines**

* Friendly empty-state message improves user experience
* Use `.some()` to check favorites efficiently
* Grid layout ensures responsive, consistent movie cards

---

### Step 16: Update Hero Component I Search & Call to Action 🎬🔍

---

**📁 File Path**

```
src/components/modules/Hero.jsx
```

---

**✅ Features**

- Renders a prominent hero banner with title and description
- Includes two CTA buttons (“Browse Movies” and “Coming Soon”)
- Integrates `MovieSearch` to trigger `onSearch` via `handleEvent` prop
- Responsive flexbox layout for mobile-first design
- Uses semantic HTML (`<article>`, `<h1>`, `<p>`, `<a>`)

---

**🧩 Code**

```jsx
import MovieSearch from '../components/MovieSearch';

const Hero = ({ handleEvent }) => {
  return (
    <article className="hero">
      <div className="container d-flex f-direction-column a-items-center g-8">
        <h1 className="hero__title t-align-center">
          Explore spoiler-free cinema with{" "}
          <span className="c-primary">AI reviews</span>
        </h1>
        <div className="d-flex f-direction-column a-items-center g-4">
          <p className="hero__paragraph t-align-center">
            Your movie app with advanced features, premieres, and interactive AR experiences.
          </p>
          <div className="flexbox flexbox--responsive g-4">
            <a
              href="#now-showing"
              className="button button--primary interactive interactive--xl"
            >
              🎬 Browse Movies
            </a>
            <a className="button button--outline-primary interactive interactive--xl">
              🍃 Coming Soon
            </a>
          </div>
        </div>
        <MovieSearch onSearch={handleEvent} />
      </div>
    </article>
  );
};

export default Hero;
```

---

**🧠 UX Guidelines**

* Keep the main headline concise and center-aligned for impact
* Ensure CTA buttons are large, with clear labels and hover states
* Place the search input below CTAs to guide user flow
* Maintain adequate spacing (`g-8`, `g-4`) for readability
* Use ARIA-accessible form controls in `MovieSearch` for inclusivity

---

### Step 17: Update App Component I useState + LocalStorage + Search Integration ⚙️🧠💾

---

**📁 File Path**

```
src/App.jsx
```

---

**✅ Features**

* Manages `movies` list and `favorites` state storing full movie objects
* Persists `favorites` in `localStorage` under key `sin-e-favorites`
* Tracks `searchTerm` state and filters movies accordingly
* Passes `handleToggleFavorite` and `setSearchTerm` down to child components
* Conditionally renders a separate “Favorites” section if any exist

---

**🧩 Code**

```jsx
import { useState } from 'react';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Hero from './components/modules/Hero';
import MovieList from './components/modules/MovieList';
import { getMovies } from './utils/movie.utils';

const FAVORITE_KEY = 'sin-e-favorites';

const App = () => {
  const [movies] = useState(getMovies());
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((favorite) => favorite.id === movie.id);
      const updated = exists
        ? prev.filter((favorite) => favorite.id !== movie.id)
        : [...prev, movie];
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main">
        <Hero handleEvent={setSearchTerm} />
        <MovieList
          id="movies"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
        {favorites.length > 0 && (
          <MovieList
            id="favorites"
            title="❤️ Your Favorites ❤️"
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
```

---

**🧠 UX Guidelines**

* Initialize `favorites` from `localStorage` to persist user choices
* Centralize state and handlers in `App` to avoid prop drilling
* Debounce search input upstream so filtering remains responsive
* Display “Favorites” only when the array is non-empty for clarity
* Keep header and footer outside search/list to maintain consistent layout

---
