import React from "react";

// export const MoviesContext = React.createContext({
const MoviesContext = React.createContext({
  links: [],
  showSearch: "",
  toggleSearch: () => {},
  scrolling: "",
  toggleScrolling: () => {},
  isLoading: "",
  settingLoadState: () => {},
  renderItems: "",
  setRenderItems: () => {},
  genresMovie: [],
  settingGenresMovie: () => {},
  genresTv: [],
  settingGenresTv: () => {},
});

export default MoviesContext;
