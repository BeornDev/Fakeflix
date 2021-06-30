import React, { useRef, useContext } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import SearchContext from "../../store/search-context";
import axios from "axios";

const HeaderSearchDiv = styled.div`
  position: relative;
  transition: 0.5s all;
  /* overflow: hidden; */
  width: 30px;
  cursor: pointer;

  .search-icon {
    position: relative;
    z-index: 1;
  }
  @media (min-width: 768px) {
    width: ${(props) => (props.search ? "30vw" : "30px")};
    border: ${(props) => (props.search ? "2px solid #fff" : "none")};
    background-color: ${(props) =>
      props.search ? "rgba(0, 0, 0, 0.3)" : "transparent"};
    max-width: 400px;
  }
`;
const InputSearchHeader = styled.input`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #fff;
  padding: 0 10px 0 30px;
  border: none;
  font-size: 15px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default function HeaderSearch() {
  console.log("Header Search Rendered");
  const { searching, setSearching, topSearches, populateTopSearches } =
    useContext(SearchContext);
  const inputRef = useRef();
  const handleClickSearch = async () => {
    setSearching();
    topSearches.length === 0 &&
      (await axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=a737035cefb22acd96f01ffdcf8f4f7b`
        )
        .then((res) => {
          populateTopSearches(res.data.results);
        })
        .catch((error) => console.log(error)));
  };
  return (
    <HeaderSearchDiv search={searching}>
      <SearchIcon
        className="search-icon"
        onClick={() => {
          handleClickSearch();
        }}
        style={{ fontSize: 30 }}
      />
      <InputSearchHeader
        ref={inputRef}
        type="text"
        placeholder="Title, people, genres"
      />
    </HeaderSearchDiv>
  );
}
