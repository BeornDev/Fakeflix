import { useState, useEffect } from "react";
import useRqTrending from "../components/hooks/useRqTrending";

import MoviesContext from "./media-context";

export default function MoviesProvider(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [renderItems, setRenderItems] = useState();
  const [genresMovie, setGenresMovie] = useState([]);
  const [genresTv, setGenresTv] = useState([]);

  const moviesContext = {
    links: [
      { name: "Home", route: "/", class: "home" },
      { name: "TV Shows", route: "/tvshows", class: "tvshows" },
      { name: "Movies", route: "/movies", class: "movies" },
      { name: "New & Popular", route: "/NewPopular", class: "newpopular" },
      { name: "My List", route: "/MyList", class: "mylist" },
    ],
    showSearch: showSearch,
    toggleSearch: () => setShowSearch((prevState) => !prevState),
    scrolling: scrolling,
    toggleScrolling: (value) => setScrolling(value),
    isLoading,
    settingLoadState: (value) => setIsLoading(value),
    renderItems,
    setRenderItems: (value) => setRenderItems(value),
    genresMovie,
    settingGenresMovie: (value) => setGenresMovie(value),
    genresTv,
    settingGenresTv: (value) => setGenresTv(value),
  };
  return (
    <MoviesContext.Provider value={moviesContext}>
      {props.children}
    </MoviesContext.Provider>
  );
}
