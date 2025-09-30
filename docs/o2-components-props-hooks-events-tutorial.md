### Step 13: Update Base CSS - Form, Typography & Utilities

Complete the CSS architecture with enhanced form controls, typography scaling, and utility classes for interactive cinema experiences! 🎨⚙️

**📁 Folder Structure:**
```
src/css/modules/ 📂
├── components.css 📌
├── elements.css 🧱
└── utils.css 🧰
```

**✅ Features:**
- 📱 Responsive form container scaling for mobile and desktop
- ✨ Animated form inputs with focus states and transitions
- 📝 Extended typography system with large text variants
- 🎨 Secondary button variant for complementary actions
- 📐 Position utility classes for consistent layout spacing

**🧩 Code:**

**📌 `src/css/modules/components.css`**
```css
/* ... existing .card rules ... */

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
```

**🧱 `src/css/modules/elements.css`**
```css
/* ... existing .text rules ... */

.text--lg {
  font-size: calc(var(--size) * 4.5);
}

/* ... existing .button--primary rules ... */

.button--secondary {
  --primary-button-color: var(--secondary-color);
  --primary-button-text: var(--primary-text);
}
```

**🧰 `src/css/modules/utils.css`**
```css
/* ... existing positioning utilities ... */

.l-2 {
  left: calc(var(--size) * 2);
}
```

**🧠 Architecture Benefits:**
- **Form Enhancement** 📱 Constrained width for readability, expandable on larger screens
- **Interactive Feedback** ✨ Clear focus states guide user interactions effectively
- **Typography Scaling** 📝 Hierarchical text sizes for better content organization
- **Button Variants** 🎨 Multiple button styles for diverse UI actions
- **Utility System** 📐 Consistent spacing utilities for precise positioning

---

### Step 14: Add Reusable Button Component - Children & Variants

Build a flexible, accessible button component with variant support and full customization options! 🧩🎨

**📁 File Path:** `src/ui/components/elements/Button.tsx`

**✅ Features:**
- 🧒 Flexible children prop for text, icons, or mixed content
- 🎨 Variant prop mapping to CSS classes for consistent styling
- 🔧 Full customization with className and spread props
- ♿ Fully accessible with semantic type and ARIA attributes
- 🛡️ Type-safe props with proper interface definition

**🧩 Code:**

```tsx
import type { ReactNode } from "react";

interface AppButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outlinePrimary';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const variantClassMap = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outlinePrimary: 'button--outline-primary',
};

const AppButton = ({
  type = 'button',
  variant,
  className = '',
  onClick,
  children,
  ...rest
}: AppButtonProps) => {
  const variantClass = (variant && variantClassMap[variant]) || '';

  return (
    <button
      type={type}
      className={`button ${variantClass} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AppButton;
```

**🧠 Architecture Benefits:**
- **Type Safety** 🛡️ Interface ensures proper prop usage and prevents runtime errors
- **Flexible Content** 🧒 Children prop allows for any React content composition
- **Variant System** 🎨 Consistent styling through mapped CSS classes
- **Accessibility** ♿ Semantic HTML with proper ARIA attribute support
- **Extensibility** 🔧 Spread props allow for additional attributes without modification

---

### Step 15: Update MovieCard Component - Toggle Favorite with Full Object

Enhance the movie card with interactive favorite functionality using the reusable Button component! ❤️🖤

**📁 File Path:** `src/ui/components/components/MovieCard.tsx`

**✅ Features:**
- 🖼️ Movie poster display with lazy loading optimization
- ❤️ Heart button to toggle favorite state with full movie object
- 🧩 Integration with reusable Button and Rating components
- ♿ Accessible button with dynamic aria-label based on state
- 🎭 Genre badge positioning with updated left offset utility

**🧩 Code:**

```tsx
import type { Movie } from '../../../shared/types/movie.types';
import AppButton from '../elements/AppButton';
import Rating from '../widgets/Rating';

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite?: (movie: Movie) => void;
}

const MovieCard = ({ movie, isFavorite, onToggleFavorite = () => { } }: MovieCardProps) => {
  const { title, description, duration, poster, genres, showTimes, rating } = movie;

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
        <span className="badge badge--primary interactive p-absolute t-2 l-2 f-weight-700">{genres[0]?.name || 'Unknown'}</span>
        <AppButton
          variant="secondary"
          className="interactive p-absolute t-2 r-2"
          onClick={() => onToggleFavorite(movie)}
          aria-label={isFavorite ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
        >
          {isFavorite ? "❤️" : "🤍"}
        </AppButton>
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
- **Component Composition** 🧩 Reuses Button and Rating components for consistency
- **Interactive State** ❤️ Clear visual feedback for favorite toggle functionality
- **Type Safety** 🛡️ Proper interfaces ensure correct prop usage
- **Accessibility** ♿ Dynamic ARIA labels improve screen reader experience
- **Performance** ⚡ Lazy loading images optimizes page load times

---

### Step 16: Add MovieSearch Component - Controlled Input with Debounce

Create a smart search component with debounced input for optimal performance and user experience! 🔍⌛

**📁 File Path:** `src/ui/components/components/MovieSearch.tsx`

**✅ Features:**
- 🔍 Controlled input with internal state management
- ⌛ 500ms debounce prevents excessive API calls or filtering
- ♿ Accessible form labels and semantic search input
- 🎨 Consistent styling with form input classes
- 🧹 Automatic cleanup of timeout on component unmount

**🧩 Code:**

```tsx
import { useEffect, useState } from 'react';

interface MovieSearchProps {
  onSearch: (searchTerm: string) => void;
}

const MovieSearch = ({ onSearch }: MovieSearchProps) => {
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
        placeholder="Search movies... 🎬"
        className="form__input interactive interactive--xl t-align-center"
        aria-label="Search movies"
      />
    </form>
  );
};

export default MovieSearch;
```

**🧠 Architecture Benefits:**
- **Performance Optimization** ⌛ Debounce prevents excessive function calls
- **Controlled Input** 🔍 React state synchronization ensures predictable behavior
- **Accessibility** ♿ Semantic search input with proper ARIA labeling
- **User Experience** 🎨 Clear placeholder guides user interaction
- **Memory Management** 🧹 Proper cleanup prevents memory leaks

---

### Step 17: Update MovieGrid Component - Conditional Rendering with Empty State

Transform the MovieGrid into a flexible MovieList component with comprehensive state management! 🧩📱

**📁 File Path:** `src/ui/components/modules/MovieList.tsx`

**✅ Features:**
- 🎬 Flexible section rendering with custom ID and title
- ❤️ Favorites array support for heart toggle functionality
- 🎭 Empty state handling with friendly user messages
- 🧩 MovieCard integration with favorite state management
- 📱 Responsive grid layout for all screen sizes

**🧩 Code:**

```tsx
import type { Movie } from '../../../shared/types/movie.types';
import MovieCard from '../components/MovieCard';

interface MovieGridProps {
  id: string;
  title: string;
  movies: Movie[];
  favorites?: Movie[];
  onToggleFavorite?: (movie: Movie) => void;
}

const MovieGrid = ({
  id,
  title,
  movies,
  favorites = [],
  onToggleFavorite
}: MovieGridProps) => (
  <section className="section" id={id}>
    <div className="container d-flex f-direction-column g-8">
      <h2 className="title c-primary t-align-center">{title}</h2>
      {movies.length === 0 ? (
        <p className="text text--lg t-align-center">No movies found 😞</p>
      ) : (
        <div className="g-layout g-layout--auto-fit-columns g-8">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.some(favorite => favorite.id === movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

export default MovieGrid;
```

**🧠 Architecture Benefits:**
- **Conditional Rendering** 🎭 Graceful handling of empty states with user-friendly messages
- **Flexible Configuration** 🔧 Customizable section ID and title for different contexts
- **State Management** ❤️ Efficient favorite checking using array.some() method
- **Component Reusability** 🧩 Single component handles multiple movie list scenarios
- **Performance Efficiency** ⚡ Optimized rendering with proper key props and state checks

---

### Step 18: Update Hero Component - Search & Call to Action Integration

Enhance the hero section with integrated search functionality and compelling call-to-action buttons! 🎬🔍

**📁 File Path:** `src/ui/components/modules/Hero.tsx`

**✅ Features:**
- 🎯 Prominent hero banner with engaging title and description
- 🔘 Two strategic CTA buttons for user navigation
- 🔍 Integrated MovieSearch component with event handling
- 📱 Responsive flexbox layout for mobile-first design
- 🌟 Semantic HTML structure with proper accessibility

**🧩 Code:**

```tsx
import MovieSearch from '../components/MovieSearch';

interface HeroProps {
  handleEvent: (searchTerm: string) => void;
}

const Hero = ({ handleEvent }: HeroProps) => {
  return (
    <article className="hero">
      <div className="container d-flex f-direction-column a-items-center g-8">
        <h1 className="hero__title t-align-center">
          Explore spoiler-free cinema with{" "}
          <span className="c-primary">AI reviews</span>
        </h1>
        <div className="d-flex f-direction-column a-items-center g-4">
          <p className="hero__paragraph t-align-center">
            Your movie app with advanced features, premieres, and interactive AR experiences. 🎬✨
          </p>
          <div className="flexbox flexbox--responsive g-4">
            <a
              href="#movies"
              className="button button--primary interactive interactive--xl"
            >
              🎬 Browse Movies
            </a>
            <a 
              href="#coming-soon" 
              className="button button--outline-primary interactive interactive--xl"
            >
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

**🧠 Architecture Benefits:**
- **User Flow Optimization** 🎯 Strategic placement guides users from headline to action
- **Search Integration** 🔍 Seamless search functionality within hero context
- **Visual Hierarchy** 🌟 Clear content progression from title to CTAs to search
- **Responsive Design** 📱 Flexible button layout adapts to screen sizes
- **Event Handling** 🔧 Clean prop drilling for search functionality

---

### Step 19: Update App Component - State Management with localStorage & Search

Transform the App into a comprehensive state management hub with persistent favorites and dynamic filtering! ⚙️🧠💾

**📁 File Path:** `src/App.tsx`

**✅ Features:**
- 🎬 Movies state management with search filtering
- ❤️ Persistent favorites using localStorage with full movie objects
- 🔍 Search term state with real-time movie filtering
- 🔄 Toggle favorite functionality with local storage sync
- 📑 Conditional rendering of favorites section when populated

**🧩 Code:**

```tsx
import { useState } from 'react';
import type { Movie } from './shared/types/movie.types';
import Footer from './ui/components/layouts/Footer';
import Header from './ui/components/layouts/Header';
import Hero from './ui/components/modules/Hero';
import MovieList from './ui/components/modules/MovieList';
import { getMoviesFromMockData } from './utils/movie.utils';

const FAVORITE_KEY = 'cine-spoilers-favorites';

const App = () => {
  const [movies] = useState<Movie[]>(getMoviesFromMockData());
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleToggleFavorite = (movie: Movie) => {
    setFavorites(prev => {
      const exists = prev.some(favorite => favorite.id === movie.id);
      const updated = exists
        ? prev.filter(favorite => favorite.id !== movie.id)
        : [...prev, movie];
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const filteredMovies = movies.filter(movie =>
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

**🧠 Architecture Benefits:**
- **State Centralization** 🧠 Single source of truth for all application state
- **Data Persistence** 💾 localStorage integration maintains user preferences
- **Type Safety** 🛡️ Full typing ensures runtime error prevention
- **Performance Optimization** 🔍 Efficient filtering with case-insensitive search
- **Conditional UI** 📑 Dynamic favorites section improves user experience
- **Clean Architecture** 🏗️ Proper separation of concerns with clear data flow