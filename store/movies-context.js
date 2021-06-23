import React from "react";

const MoviesContext = React.createContext({
  links: [],
  showSearch: "",
  toggleSearch: () => {},
  scrolling: "",
  toggleScrolling: () => {},
  isLoading: "",
  settingLoadState: () => {},
  windowWWith: "",
  toggleWindowSize: () => {},
});

export default MoviesContext;
