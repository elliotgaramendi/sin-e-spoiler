### Step 18: Install Variable Fonts & Update CSS Styles I Enhanced Themes & Utilities 🎨💅

---

**🔧 Installation**

```bash
npm install @fontsource-variable/open-sans @fontsource-variable/roboto
```

---

**📁 File Paths & Updates**

1. **`src/css/index.css`**
2. **`src/css/modules/components.css`**
3. **`src/css/modules/elements.css`**
4. **`src/css/modules/libraries.css`** *(new file)*
5. **`src/css/modules/utils.css`**
6. **`src/css/modules/variables.css`**

---

**✅ Features**

* **Fontsource Integration:** Load `Roboto Variable` & `Open Sans Variable` as CSS variables
* **Global Library Import:** Pull in Swiper & other third-party styles via `libraries.css`
* **Hero Section Refinement:** Full-height coverflow mask, responsive padding for `.hero`
* **Form Input Adjustment:** Tighter horizontal padding for `.form__input` for consistent UX
* **Poster Utility:** Add `.img--poster` class for uniform movie poster dimensions
* **Swiper Custom Styles:** Navigation & pagination theming in `libraries.css`
* **Flex Utilities:** Insert `.f-wrap-wrap` and `.a-items-end` for flexible layouts

---

<details>
<summary><code>src/css/index.css</code></summary>

```css
/* … existing @import rules … */

/* ↓ Add this line as last import to include third-party library styles */
@import url("./modules/libraries.css");
```

</details>

<details>
<summary><code>src/css/modules/components.css</code></summary>

```css
/* … existing .off-canvas__child rules … */

/* ↓ Replace old .hero with this updated definition */
.hero {
  position: relative;
  display: flex;
  height: min(calc(var(--size) * 160), 75dvh);
  padding-block: calc(var(--size) * 20);
  box-sizing: border-box;

  & > * {
    width: 100%;
  }

  & img {
    mask-image: linear-gradient(var(--primary-background) 87.5%, transparent);
  }
}

/* … existing .form rules … */

/* ↓ Update .form__input padding here */
.form__input {
  padding: 0.75em 1em;
  /* …other existing properties remain unchanged… */
}

/* … rest of file … */
```

</details>

<details>
<summary><code>src/css/modules/elements.css</code></summary>

```css
/* … existing .img--background rules … */

/* ↓ Add .img--poster below .img--background */
.img--poster {
  width: 100%;
  height: calc(var(--size) * 90);
  border-radius: var(--border-radius);
}

/* … rest of file … */
```

</details>

<details>
<summary><code>src/css/modules/libraries.css</code> (new file)</summary>

```css
.swiper--custom {
  --swiper-navigation-color: var(--primary-color);
  --swiper-navigation-size: calc(var(--size) * 8);
  --swiper-navigation-sides-offset: calc(var(--size) * 2);
  --swiper-pagination-color: var(--primary-color);
  --swiper-pagination-bottom: calc(var(--size) * 1.25);
  --swiper-pagination-bullet-size: calc(var(--size) * 2.25);
  --swiper-pagination-bullet-opacity: 0.875;
  --swiper-pagination-bullet-inactive-color: var(--primary-color);
  --swiper-pagination-bullet-inactive-opacity: 0.25;
  width: 100%;
}
```

</details>

<details>
<summary><code>src/css/modules/utils.css</code></summary>

```css
/* … existing .d-flex rules … */

/* ↓ Insert .f-wrap-wrap between .d-flex and .f-direction-column */
.f-wrap-wrap {
  flex-wrap: wrap;
}

/* … existing rules … */

/* ↓ Insert .a-items-end below .a-items-center */
.a-items-end {
  align-items: flex-end;
}

/* … rest of file … */
```

</details>

<details>
<summary><code>src/css/modules/variables.css</code></summary>

```css
:root {
  /* … existing variable declarations … */

  /* ↓ Update font families here */
  --primary-font: 'Roboto Variable', sans-serif;
  --secondary-font: 'Open Sans Variable', sans-serif;

  /* … rest of file … */
}
```

</details>

---

**🧠 UX Guidelines**

* 🌟 **Hero Mask:** Ensures smooth fade-out gradient on large background images
* 📐 **Consistent Posters:** Uniform `.img--poster` dimensions prevent layout shifts
* ✨ **Form Input Padding:** Aligns text neatly inside search bar for comfortable typing
* ♿ **Keyboard Focus:** Maintain clear focus states on `.form__input` for accessibility
* 🌈 **Swiper Contrast:** Bullets & nav elements match brand palette for visible controls

---

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Each file update targets one concern—fonts, components, utilities, or libraries
* **Open/Closed:** Existing rules remain untouched; new lines extend styling without modifying core logic
* **DRY Principle:** Leverage CSS variables (`--size`, `--primary-color`, etc.) rather than hard-coded values
* **Modularity:** Introduce `libraries.css` for third-party overrides, keeping core styles uncluttered
* **Maintainability:** Install variable fonts once, then reference them via CSS variables for consistency

---

> 🎉 All CSS & fontsource updates for Step 18 are now complete!

---

### Step 19: Update `movie.util.js` I Map TMDB Data with `poster` & `backdrop` 🎞️🌅

**📁 File Path**

```
src/utils/movie.util.js
```

**✅ Features**

* Extracts `poster_path` and `backdrop_path` from each TMDB result
* Creates two distinct URLs: `poster` (w342) and `backdrop` (w1280)
* Maintains `getMovies()` as the single source of truth for movie data

**🧩 Code**

```js
import { tmdbNowPlayingMock } from '../data/movies.data';

export const getImageUrl = (size = 'w342', path) => {
  if (!path) return `https://picsum.photos/${size === 'w342' ? '342/513' : '780/439'}?random`;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  28: 'Action',
  35: 'Comedy',
  53: 'Thriller',
  80: 'Crime',
  878: 'Sci-Fi',
  10751: 'Family',
  10752: 'War',
  18: 'Drama',
  9648: 'Mystery',
  27: 'Horror',
  10749: 'Romance',
  37: 'Western'
};

export const mapTmdbToMovie = tmdbMovie => {
  const {
    id,
    title,
    overview,
    release_date,
    vote_average,
    genre_ids,
    poster_path,
    backdrop_path
  } = tmdbMovie;

  return {
    id,
    title,
    description: overview,
    duration: '120 min',
    releaseDate: release_date,
    rating: Math.round(vote_average) / 2,
    genre: genres[genre_ids[0]] || '🎞️',
    poster: getImageUrl('w342', poster_path),
    backdrop: getImageUrl('w1280', backdrop_path),
    showTimes: ['2:30 PM', '5:45 PM', '9:00 PM', '11:30 PM'],
  };
};

export const getMovies = () =>
  tmdbNowPlayingMock.results.map(mapTmdbToMovie);
```

**🧠 UX Guidelines**

* Provide consistent 16:9 aspect ratios for `poster` and `backdrop` images
* Ensure placeholder images via Picsum when no path is available
* Keep movie objects lightweight—only necessary fields (id, title, poster, backdrop, etc.)
* Abstract TMDB-specific fields so UI components remain decoupled
* Validate data mapping before rendering (e.g., missing `genre_ids`)

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** This module only handles data transformation, not presentation
* **Open/Closed:** You can extend `mapTmdbToMovie` without modifying calling code
* **DRY Principle:** Centralizes URL construction in `getImageUrl`
* **Modularity:** Splits “genre” lookup from URL logic for easier testing
* **Error Tolerance:** Falls back to a random placeholder if `path` is missing

---

### Step 20: Create `notifyFavorite` Utility I Toast Notifications 🔔💬

**🔧 Installation**

```bash
npm install react-toastify
```

**📁 File Path**

```
src/utils/notifyFavorite.util.js
```

**✅ Features**

* Exports a function `notifyFavorite(movieTitle, isAdded)`
* Uses `toast.success` or `toast.info` depending on action (add/remove)
* Displays emoji-rich messages for immediate feedback
* Auto-dismisses toasts after 2500 ms to avoid stacking

**🧩 Code**

```js
import { toast } from 'react-toastify';

const notifyFavorite = (movieTitle, isAdded) => {
  const message = isAdded
    ? `❤️ "${movieTitle}" added to favorites!`
    : `💔 "${movieTitle}" removed from favorites`;
  const toastType = isAdded ? 'success' : 'info';
  toast[toastType](message, { position: 'top-right', autoClose: 2500 });
};

export default notifyFavorite;
```

**🧠 UX Guidelines**

* Use concise, emoji-rich messages to reinforce user actions
* Position toasts in top-right so they don’t obscure main content
* Auto-dismiss notifications quickly to keep interface uncluttered
* Ensure screen readers announce toast content when they appear
* Provide visual consistency—same style for add/remove actions

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Utility solely manages notification logic
* **Open/Closed:** Modify message or options without changing calling code
* **Strategy Pattern:** Chooses `toast.success` or `toast.info` based on `isAdded`
* **Dependency Inversion:** Abstracts `react-toastify` calls behind a simple API
* **Modularity:** Separation allows easy swapping of notification library if needed

---

### Step 20: Update `MovieCard.jsx` I Favorite Button & Toast Integration ❤️🔔

**📁 File Path**

```
src/components/components/MovieCard.jsx
```

**✅ Features**

* Imports and calls `notifyFavorite` within the heart button’s `onClick` handler
* Does not duplicate state—relies on props `isFavorite` plus callback `onToggleFavorite(movie)`
* Uses `<Button variant="secondary">` positioned in top-right of the poster
* Displays movie metadata: title, rating (via `<Rating />`), genre badge, showtimes
* Truncates description to 128 characters for brevity

**🧩 Code**

```jsx
import notifyFavorite from '../../utils/notifyFavorite.util';
import Button from '../elements/Button';
import Rating from '../widgets/Rating';

const MovieCard = ({ movie, isFavorite, onToggleFavorite = () => { } }) => {
  const { title, rating, genre, duration, poster, description, showTimes } = movie;

  return (
    <article className="card d-flex f-direction-column">
      <div className="p-relative">
        <img
          src={poster}
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
          onClick={() => {
            onToggleFavorite(movie);
            notifyFavorite(movie.title, !isFavorite);
          }}
          aria-label={isFavorite ? `Remove ${movie.title}` : `Add ${movie.title}`}
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
        <p className="text text--sm c-shadow">{description.slice(0, 128)}...</p>
        <div className="d-flex f-direction-column g-2 m-top-auto">
          <h4 className="subtitle subtitle--2xs c-primary">Today's Showtimes</h4>
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

**🧠 UX Guidelines**

* Position the heart button over the poster for quick access
* Use `aria-label` on the button to convey “Add/Remove \[movie]” to screen readers
* Truncate long descriptions to avoid overflowing card layout
* Display showtimes as accessible buttons for clear tap targets
* Badge indicates genre at top-left, visually balanced with the heart at top-right

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Component only renders a single movie card with favorite logic
* **Open/Closed:** Accepts `isFavorite` and `onToggleFavorite` as props—no internal favorite logic
* **DRY Principle:** Reuses `<Button>`, `<Rating>`, and shared CSS classes for consistency
* **Modularity:** Moves notification logic to `notifyFavorite.util.js` for testability
* **Accessibility:** All interactive elements have clear `aria-labels` and focusable targets

---

### Step 21: Implement `Hero` Component I Swiper-Powered Slider 🎬🌀

**🔧 Installation**

```bash
npm install swiper
```

**📁 File Path**

```
D:\develop\sin-e-spoiler-bk\src\components\modules\Hero.jsx
```

**✅ Features**

* Autoplay slider with 5s delay and pause on hover
* Coverflow 3D effect with keyboard and navigation support
* ARIA accessibility messages for “previous” and “next” slides
* Responsive breakpoints (spaceBetween at ≥768px)
* Looped infinite sliding with pagination bullets

**🧩 Code**

```jsx
import { A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = ({ data }) => {
  return (
    <Swiper
      a11y={{ prevSlideMessage: 'Previous slide of hero', nextSlideMessage: 'Next slide of hero' }}
      aria-label="Hero slider"
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      breakpoints={{ 768: { spaceBetween: 32 } }}
      className="swiper--custom"
      coverflowEffect={{ rotate: 87.5 }}
      effect={'coverflow'}
      keyboard={{ enabled: true }}
      loop
      modules={[A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={28}
      speed={500}
      tag='section'
    >
      {
        data.map(element => {
          const { id, title, description, backdrop } = element;
          return (
            <SwiperSlide key={id}>
              <article className="hero">
                <img src={backdrop} alt={title} width="1024" height="576" loading="lazy" className="img img--background" />
                <div className="container d-flex a-items-end j-content-start">
                  <div className="d-flex f-direction-column g-8">
                    <div>
                      <h2 className="hero__title">{title}</h2>
                      <p className="hero__paragraph">
                        {description.slice(0, 64)}...
                      </p>
                    </div>
                    <div className="d-flex f-wrap-wrap g-4">
                      <a href="#now-showing" className="button button--primary interactive interactive--xl">
                        🎬 Book Now
                      </a>
                      <a className="button button--outline-primary interactive interactive--xl">
                        📽️ Watch Trailer
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default Hero;
```

**🧠 UX Guidelines**

* Use consistent 16:9 image dimensions (`width="1024" height="576"`) to avoid layout shifts
* Provide clear, truncated descriptions (max 64 characters) for readability
* Ensure “Book Now” and “Watch Trailer” buttons are large and accessible
* Pause autoplay on hover/focus to prevent user disorientation
* Use ARIA labels for screen-reader announcements (“Previous slide”, “Next slide”)

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** `Hero` only configures and renders the Swiper slider
* **Open/Closed:** Accepts a `data` prop so new slides can be added without modifying component logic
* **DRY Principle:** Leverages Swiper modules for reusable navigation/pagination
* **Modularity:** CSS classes like `.hero` and `.img--background` keep styling consistent
* **Accessibility:** ARIA messages and keyboard navigation ensure inclusivity

---

### Step 22: Create `usePremieres` Hook I Simulated TMDB Fetch 🪝🎥

**📁 File Path**

```
D:\develop\sin-e-spoiler-bk\src\hooks\usePremieres.js
```

**✅ Features**

* Fetches first 10 movies via `getMovies()` from `movie.util`
* Manages `premieresList`, `isLoading`, and `loadError` state
* Simulates network latency with `setTimeout(delayMs)`
* Cleans up timer on component unmount using `useRef`
* Default `delayMs` of 500ms, configurable via parameter

**🧩 Code**

```js
import { useEffect, useRef, useState } from 'react';
import { getMovies } from '../utils/movie.util';

const usePremieres = (delayMs = 500) => {
  const [premieresList, setPremieresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      try {
        setLoadError(false);
        const allMovies = getMovies();
        setPremieresList(allMovies.slice(0, 10));
      } catch (error) {
        setLoadError(error);
      } finally {
        setIsLoading(false);
      }
    }, delayMs);

    return () => clearTimeout(timerRef.current);
  }, [delayMs]);

  return { premieresList, isLoading, loadError };
};

export default usePremieres;
```

**🧠 UX Guidelines**

* Display a loading placeholder (skeleton/spinner) while `isLoading` is `true`
* Show an error message when `loadError` is truthy
* Reserve a fixed-height container to prevent layout jumps
* Mark loading/error region with `aria-live="polite"` for screen readers
* Smoothly transition from skeleton to real content once data loads

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Hook solely handles “fetching” and state logic
* **Facade Pattern:** Abstracts `getMovies().slice(0, 10)` behind a simple interface
* **Cleanup Principle:** Uses `useRef` to store timer ID and clears it on unmount
* **Open/Closed:** `delayMs` parameter allows timeout adjustment without code changes
* **Error Handling:** Catches sync exceptions and signals consumers via `loadError`

---

### Step 23: Create `useWindowSize` Hook I Window Width Detection 🌐📏

**📁 File Path**

```
D:\develop\sin-e-spoiler-bk\src\hooks\useWindowSize.js
```

**✅ Features**

* Tracks `window.innerWidth` in state object `{ width }`
* Initializes width only if `window` is available (guards SSR)
* Adds/removes `resize` listener on mount/unmount
* Invokes `onResize()` immediately to capture initial width
* Returns `{ width }` for easy destructuring in components

**🧩 Code**

```js
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const [size, setSize] = useState({
    width: isClient ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (!isClient) return;

    const onResize = () => {
      setSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [isClient]);

  return size;
};

export default useWindowSize;
```

**🧠 UX Guidelines**

* Use this hook to determine responsive layouts (e.g., number of skeleton cards or slider slides)
* Immediately capture the initial width for correct first render
* Keep the listener lightweight—only updates when width changes
* Optionally debounce if resize events become too frequent (not required here)
* Provide clear fallback `{ width: 0 }` on server-side renders

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Hook only tracks window width and cleanup
* **Open/Closed:** Returns `{ width }`, easily extended to include height later
* **Guard Clause:** Prevents errors when `window` is undefined (SSR)
* **Cleanup Principle:** Unregisters `resize` listener on unmount to avoid leaks
* **Performance:** Updates state only when actual resize events occur (React batches efficiently)

---

### Step 24: Create `LoadingSkeleton` Component I Visual Placeholder ⏳✨

**🔧 Installation**

```bash
npm install react-loading-skeleton
```

**📁 File Path**

```
src/components/widgets/LoadingSkeleton.jsx
```

**✅ Features**

* Renders a customizable grid of skeleton blocks using `react-loading-skeleton`
* Accepts props: `quantity` (number of placeholders), `count` (rows per placeholder)
* Supports custom `width`, `height`, and `wrapperClasses` for layout flexibility
* Uses `SkeletonTheme` to apply brand colors (`#010508` base, `#23B5E8` highlight)
* Provides responsive container by applying `f-1` to each skeleton

**🧩 Code**

```jsx
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = ({ quantity, count = 1, width = '100%', height = 128, wrapperClasses }) => (
  <SkeletonTheme baseColor="#010508" highlightColor="#23B5E8">
    <div className={wrapperClasses}>
      {Array.from({ length: quantity }).map((_, index) => (
        <Skeleton
          key={index}
          count={count}
          width={width}
          height={height}
          containerClassName='f-1'
        />
      ))}
    </div>
  </SkeletonTheme>
);

export default LoadingSkeleton;
```

**🧠 UX Guidelines**

* Shape each skeleton to match real content dimensions to prevent layout shifts
* Apply subtle shimmer animation as visual feedback that data is loading
* Ensure skeleton blocks fill available width (`wrapperClasses="d-flex g-8"`) for proper alignment
* Remove skeletons immediately once `isLoading` becomes false to reveal real content
* Provide accessible context by surrounding skeletons in a section labeled “Loading…” if needed

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Component solely handles placeholder rendering
* **Open/Closed:** Accepts props to adjust shape/quantity without modifying core logic
* **DRY Principle:** Uses `Array.from` and `map` for concise iteration
* **Modularity:** Wrapped in `SkeletonTheme` so theming can be changed globally
* **Performance:** Minimizes re-renders by using fixed keys and minimal props

---

### Step 25: Create `PremieresSlider` Component I Carousel of Posters 🎞️🎠

**📁 File Path**

```
src/components/widgets/PremieresSlider.jsx
```

**✅ Features**

* Displays a Swiper carousel of movie posters for “Premieres”
* Accessible messages via `a11y` for “previous” and “next” slide announcements
* Responsive breakpoints: 2 slides per view by default, up to 5 slides at ≥1280px
* Navigation arrows enabled to move between slides
* Each slide shows a clickable poster image and movie title underneath

**🧩 Code**

```jsx
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PremieresSlider = ({ items }) => (
  <Swiper
    a11y={{ prevSlideMessage: 'Previous slide of premieres', nextSlideMessage: 'Next slide of premieres' }}
    aria-label="Premieres slider"
    breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 32 }, 1024: { slidesPerView: 4, spaceBetween: 32 }, 1280: { slidesPerView: 5, spaceBetween: 32 } }}
    className="swiper--custom"
    modules={[A11y, Navigation]}
    navigation
    slidesPerView={2}
    spaceBetween={28}
  >
    {items.map(element => {
      const { id, title, poster } = element;
      return (
        <SwiperSlide key={id}>
          <a href="#" className="link d-flex f-direction-column g-2">
            <img
              src={poster}
              alt={title}
              width="180"
              height="320"
              loading="lazy"
              className="img img--poster"
            />
            <h3 className="title title--2xs t-align-center">{title}</h3>
          </a>
        </SwiperSlide>
      )
    })}
  </Swiper>
);

export default PremieresSlider;
```

**🧠 UX Guidelines**

* Use uniform poster dimensions (`width="180" height="320"`) for consistent slide height
* Ensure navigation arrows are large enough to tap on mobile devices
* Display movie title below each poster, centered for readability
* Provide sufficient `spaceBetween={28}` to avoid overcrowding on smaller screens
* Include accessible labels so screen readers announce slide changes properly

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Component only renders a poster carousel
* **Open/Closed:** Accepts an `items` array—new posters can be added without code changes
* **DRY Principle:** Reuses `.img--poster` and `.title--2xs` classes for styling
* **Modularity:** Uses Swiper modules (`A11y`, `Navigation`) for accessibility/navigation features
* **Performance:** `loading="lazy"` defers off-screen images until needed

---

### Step 26: Create `PremieresSection` Component I Hook Integration & Fallbacks 🪝🔄

**📁 File Path**

```
src/components/modules/PremieresSection.jsx
```

**✅ Features**

* Integrates `usePremieres` to fetch top-10 “Premieres” with loading/error states
* Uses `useWindowSize` to determine number of skeleton blocks and poster sizes
* Renders a heading, then either a `LoadingSkeleton` or `PremieresSlider` based on `isLoading`
* Displays an error message if `loadError` is truthy
* Uses CSS utility classes (`d-flex`, `f-direction-column`, `g-8`) for layout

**🧩 Code**

```jsx
import usePremieres from '../../hooks/usePremieres';
import useWindowSize from '../../hooks/useWindowSize';
import LoadingSkeleton from '../widgets/LoadingSkeleton';
import PremieresSlider from '../widgets/PremieresSlider';

const PremieresSection = () => {
  const { premieresList, isLoading, loadError } = usePremieres();
  const { width } = useWindowSize();

  return (
    <section id="premieres" className="section">
      <div className="container d-flex f-direction-column g-8">
        {loadError ? (
          <p className="text text--lg t-align-center">Error loading premieres.</p>
        ) : (
          <>
            <h2 className="title c-primary t-align-center">Premieres 🎉</h2>
            {isLoading ? (
              <LoadingSkeleton
                quantity={width >= 768 ? 5 : 2}
                count={1}
                width="100%"
                height={width >= 768 ? 400 : 350}
                wrapperClasses="d-flex g-8"
              />
            ) : (
              <PremieresSlider items={premieresList} />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PremieresSection;
```

**🧠 UX Guidelines**

* Show a centered error message (`t-align-center`) if `loadError` is true
* Use 5 skeleton cards on desktop (≥768px) and 2 on mobile to mimic carousel layout
* Reserve fixed poster heights (`height={400}` or `{350}`) to prevent layout shifts
* Center “Premieres 🎉” heading above skeleton/slider for clear hierarchy
* Wrap skeletons in `d-flex g-8` to maintain spacing between placeholders

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Section handles data fetching and chooses between skeleton or slider
* **Open/Closed:** Future UI changes won’t require modifying hook logic, just swap in a new component
* **DRY Principle:** Reuses `g-8` and `t-align-center` utility classes consistently
* **Modularity:** Separates “fetch logic” (hooks) from “render logic” (components) cleanly
* **Error Handling:** Displays fallback UI (`<p>Error …</p>`) if fetching fails

---

### Step 27: Create `useDebounce` Hook I Controlled Value Delay ⏱️🖋️

**📁 File Path**

```
src/hooks/useDebounce.js
```

**✅ Features**

* Returns a debounced version of any `inputValue` after a configurable `delayMs`
* Cancels pending timeout when `inputValue` or `delayMs` change
* Ideal for throttling rapid input or resize events in forms or data-fetching

**🧩 Code**

```js
import { useEffect, useState } from 'react';

const useDebounce = (inputValue, delayMs = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(inputValue), delayMs);
    return () => clearTimeout(timeoutId);
  }, [inputValue, delayMs]);

  return debouncedValue;
};

export default useDebounce;
```

**🧠 UX Guidelines**

* Prevent rapid-fire updates by batching frequent changes (e.g., typing in search)
* Use a shorter `delayMs` for more responsive inputs, longer for expensive operations
* Optionally display a loading indicator while the value is debouncing
* Ensure input placeholder stays visible during debounce to guide users
* Avoid confusing flicker by only triggering on stable input

**⚙️ Ensure Clean, Robust Code**

* **Strategy Pattern:** Encapsulates timing logic to reuse across components
* **Single Responsibility:** Hook only manages debounced state logic
* **Open/Closed:** Works with any primitive or object value without modification
* **DRY Principle:** Centralizes debounce behavior so it isn’t reimplemented
* **Performance:** Clears previous timeout to avoid stale updates

---

### Step 28: Update `MovieSearch` Component I Debounced Search Input 🔍⌛

**📁 File Path**

```
src/components/components/MovieSearch.jsx
```

**✅ Features**

* Uses `useDebounce` to delay calling `onSearch` until user stops typing for 500ms
* Controlled input with internal `query` state
* Accessible `aria-label` and clear placeholder with search icon
* Fires `onSearch(debouncedQuery.trim())` whenever debounced value changes

**🧩 Code**

```jsx
import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery.trim());
  }, [debouncedQuery, onSearch]);

  return (
    <form className="form" aria-label="Movie search">
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="🔍 Search movies..."
        className="form__input interactive"
        aria-label="Search movies"
      />
    </form>
  );
};

export default MovieSearch;
```

**🧠 UX Guidelines**

* Show search results only after user pauses typing to avoid performance issues
* Preserve the input value visibly as user types without lag
* Use a clear placeholder with an icon to indicate purpose at a glance
* Ensure keyboard focus and accessible form markup for screen readers
* Trim whitespace before passing to parent to prevent unnecessary empty queries

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Component solely handles capturing and debouncing search input
* **Open/Closed:** Accepts any parent-provided `onSearch` callback without internal changes
* **DRY Principle:** Leverages `useDebounce` hook instead of manual timeout logic
* **Modularity:** Keeps logic decoupled—presentation (`input`) vs. debounce behavior
* **Performance:** Debounces state updates to reduce re-renders in parent

---

### Step 29: Update `MovieList` Component I Search & Favorites Integration 🧩❤️🔎

**📁 File Path**

```
src/components/modules/MovieList.jsx
```

**✅ Features**

* Renders a section titled `title` with optional `id` for anchor-based navigation
* Shows `MovieSearch` input if `onSearch` prop is provided, enabling live filtering
* Displays “No movies found” message when the filtered `movies` array is empty
* Uses `MovieCard` to render each movie, passing `isFavorite` and `onToggleFavorite` props
* Supports both listing “Now Showing” and “Favorites” by toggling presence of `onSearch`

**🧩 Code**

```jsx
import MovieCard from '../components/MovieCard';
import MovieSearch from '../components/MovieSearch';

const MovieList = ({ id, title, movies, favorites = [], onToggleFavorite, onSearch }) => {
  return (
    <section className="section" id={id}>
      <div className="container d-flex f-direction-column g-8">
        <div className="flexbox flexbox--centered-spacing flexbox--responsive g-4">
          <h2 className="title c-primary">{title}</h2>
          {onSearch && <MovieSearch onSearch={onSearch} />}
        </div>
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
};

export default MovieList;
```

**🧠 UX Guidelines**

* Place search input next to heading for quick access on large screens
* Show a friendly “No movies found 😞” message when filter yields zero results
* Use responsive grid (`g-layout--auto-fit-columns`) to adapt to various viewports
* Highlight favorite cards consistently with heart icon and toggle via `MovieCard`
* Maintain consistent vertical spacing (`g-8`) for visual rhythm and readability

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** Component only orchestrates list/filter/favorite logic and layout
* **Open/Closed:** Accepts `onSearch` and `onToggleFavorite` callbacks without internal modification
* **DRY Principle:** Reuses `MovieCard` and `MovieSearch` rather than re-implementing similar UI
* **Modularity:** Separates search bar, empty-state message, and grid of cards into clear branches
* **Performance:** Uses `.some()` to check favorites efficiently and avoids unnecessary renders

---

### Step 30: Update `App.jsx` I Root Composition & ToastContainer 🏗️🚀

**📁 File Path**

```
src/App.jsx
```

**✅ Features**

* Renders global `<Header />`, `<Hero />`, `<PremieresSection />`, and `<Footer />` in proper order
* Manages `allMovies`, `favoriteMovies`, and `searchTerm` state with React’s `useState` & `useEffect`
* Persists `favoriteMovies` to `localStorage` whenever it changes
* Filters `allMovies` by `searchTerm` for “Now Showing” section
* Conditionally renders a “Favorites” section when `favoriteMovies.length > 0`
* Integrates `<ToastContainer />` for `react-toastify` notifications at root level

**🧩 Code**

```jsx
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Hero from './components/modules/Hero';
import MovieList from './components/modules/MovieList';
import PremieresSection from './components/modules/PremieresSection';
import { getMovies } from './utils/movie.util';

const FAVORITE_KEY = 'sin-e-favorites';

const App = () => {
  const [allMovies] = useState(getMovies());
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const handleToggleFavorite = movie => {
    setFavoriteMovies(prev =>
      prev.some(favorites => favorites.id === movie.id)
        ? prev.filter(favorites => favorites.id !== movie.id)
        : [...prev, movie]
    );
  };

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main">
        <Hero data={allMovies.slice(0, 8)} />
        <PremieresSection />
        <MovieList
          id="now-showing"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favoriteMovies}
          onToggleFavorite={handleToggleFavorite}
          onSearch={setSearchTerm}
        />
        {favoriteMovies.length > 0 && (
          <MovieList
            id="favorites"
            title="❤️ Your Favorites ❤️"
            movies={favoriteMovies}
            favorites={favoriteMovies}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
      />
    </>
  );
};

export default App;
```

**🧠 UX Guidelines**

* Place `<Hero />`, `<PremieresSection />` and then “Now Showing” for a logical content flow
* Conditionally show “Your Favorites” only when user has added at least one favorite
* Keep `<ToastContainer />` outside `<main>` so toasts never overlap content sections
* Ensure “Book Now” CTA in `<Hero />` is visible before movie listings
* Maintain consistent padding (`g-8`) between sections for visual rhythm

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** `App` only orchestrates layout and state persistence
* **Open/Closed:** Accepts new sections (e.g., “Favorites”) without modifying core logic
* **DRY Principle:** Reuses `<MovieList />` for both “Now Showing” and “Favorites”
* **Modularity:** Separates data-fetching (`getMovies`) from UI composition
* **Performance:** Persists favorites in `useEffect` to avoid redundant renders

---

### Step 31: Update `main.jsx` I Entry-Point CSS & Library Imports 🖥️🎨

**📁 File Path**

```
src/main.jsx
```

**✅ Features**

* Imports variable-font families (`@fontsource-variable/open-sans`, `@fontsource-variable/roboto`) at the top level
* Brings in all necessary CSS for `react-toastify` and `swiper` modules before application code
* Loads global `index.css` which in turn imports modular CSS layers
* Uses `createRoot` from React 19 with `<StrictMode>` for best practices

**🧩 Code**

```jsx
import '@fontsource-variable/open-sans';
import '@fontsource-variable/roboto';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from './App.jsx';
import './css/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**🧠 UX Guidelines**

* Load fonts first to prevent flash of unstyled text (FOUT)
* Ensure all Swiper CSS modules are imported so sliders match design theme
* Include `react-toastify` CSS before component mounting for consistent toast styling
* Wrap `<App />` in `<StrictMode>` to catch potential side-effect issues early
* Keep entry point minimal—no additional logic beyond imports and render

**⚙️ Ensure Clean, Robust Code**

* **Single Responsibility:** `main.jsx` only handles imports and mounting
* **Open/Closed:** New libraries can be imported here without altering component code
* **Modularity:** Splits third-party CSS imports from application’s own `index.css`
* **DRY Principle:** Centralizes all global imports in one entry file
* **Maintainability:** Clear import order (fonts → libs → app CSS → render)

---

**Comment:**
With these steps, the hero slider, custom hooks, loading skeletons, debounced search, and overall application structure are fully integrated and sequenced correctly. Each module now uses clear, descriptive variable names and avoids redundant state, resulting in a clean, maintainable, and accessible codebase.

---
