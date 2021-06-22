import React from "react";

const MoviesContext = React.createContext({
  links: [],
  showSearch: "",
  toggleSearch: () => {},
  scrolling: "",
  toggleScrolling: () => {},
  genresArray: [],
  settingGenres: () => {},
});

export default MoviesContext;
