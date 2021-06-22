import { useState } from "react";

import MoviesContext from "./movies-context";

export default function MoviesProvider(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [genres, setGenres] = useState([]);
  const toggleSearcHandler = () => {
    setShowSearch((prevState) => !prevState);
  };
  const toggleScrollHandler = (value) => {
    setScrolling(value);
  };

  const moviesContext = {
    links: [
      { name: "Home", route: "/", class: "home" },
      { name: "TV Shows", route: "/tvshows", class: "tvshows" },
      { name: "Movies", route: "/movies", class: "movies" },
      { name: "New & Popular", route: "/NewPopular", class: "newpopular" },
      { name: "My List", route: "/MyList", class: "mylist" },
    ],
    showSearch: showSearch,
    toggleSearch: toggleSearcHandler,
    scrolling: scrolling,
    toggleScrolling: toggleScrollHandler,
    genresArray: genres,
    settingGenres: (array) => {
      setGenres(array);
    },
  };
  return (
    <MoviesContext.Provider value={moviesContext}>
      {props.children}
    </MoviesContext.Provider>
  );
}
