import React, { useState } from "react";

const SearchContext = React.createContext({
  searching: "",
  toogleSearch: () => {},
  searchMedia: "",
  setMediaSearched: () => {},
  topSearches: [],
  populateTopSearches: () => {},
});

export default SearchContext;

export function SearchProvider(props) {
  const [searching, setSearching] = useState(false);
  const [searchMedia, setMediaSearched] = useState("");
  const [topSearches, setTopSearches] = useState([]);

  const searchContext = {
    searching,
    setSearching: () => setSearching((prevState) => !prevState),
    searchMedia,
    setMediaSearched: (value) => setMediaSearched(value),
    topSearches,
    populateTopSearches: (array) => setTopSearches(array),
  };
  return (
    <SearchContext.Provider value={searchContext}>
      {props.children}
    </SearchContext.Provider>
  );
}
