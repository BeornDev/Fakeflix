import React, { useState } from "react";

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

// export default props => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [scrolling, setScrolling] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(375);
//   const [genresMovie, setGenresMovie] = useState([]);
//   const [genresTv, setGenresTv] = useState([]);

//   return (<MoviesContext.Provider>
//     {props.children}
//   </MoviesContext.Provider>)
// }
