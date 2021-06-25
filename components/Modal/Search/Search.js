import { useState } from "react";
import useHttpRequest, { useRqSearch } from "../../hooks/useHttpRquest";

import styled from "styled-components";

import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";

const SearchModalDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 12;
  color: #fff;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  background: #000;
  opacity: 0;
  height: 100%;
  transition: 0.5s all;

  &.showModal-enter-active {
    transform: translateX(100%);
  }
  &.showModal-enter-done {
    opacity: 1;
    transform: translateX(0);
  }
  &.showModal-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .searchTitle {
    font-weight: bold;
    padding-left: 10px;
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function SearchModal(props) {
  const [searchingMovie, setsearchingMovie] = useState("");
  const similarMovies = useHttpRequest("movie", "top_rated");
  const searchMedia = useRqSearch(searchingMovie);
  const showedMediaOnModal =
    searchingMovie.length == 0 ? similarMovies : searchMedia;
  return (
    <SearchModalDiv className={props.showModal && "hideModal"}>
      <SearchHeader onSearchHandler={(movie) => setsearchingMovie(movie)} />
      <div className="searchTitle">{props.title}</div>
      <SearchList similarMovies={showedMediaOnModal} />
    </SearchModalDiv>
  );
}
