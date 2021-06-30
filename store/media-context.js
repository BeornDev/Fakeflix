import React, { useState } from "react";

// export const MoviesContext = React.createContext({
const MoviesContext = React.createContext({
  genresMedia: "",
  populateGenres: () => {},
});

export default MoviesContext;

export function MediaProvider(props) {
  const [genresMedia, setGenresMedia] = useState([]);

  const moviesContext = {
    genresMedia,
    populateGenres: (value) => setGenresMedia(value),
  };

  return (
    <MoviesContext.Provider value={moviesContext}>
      {props.children}
    </MoviesContext.Provider>
  );
}
