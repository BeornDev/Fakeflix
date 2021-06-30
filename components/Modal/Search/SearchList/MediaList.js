import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../../../store/search-context";
import axios from "axios";

import styled from "styled-components";

import NoFound from "./NoFound";
import ListNoInput from "./ListNoInput";
import FoundMedia from "./FoundMedia";

const SearchListDiv = styled.ul`
  display: grid;
  flex-direction: ${(props) => (props.searchedDatad ? "row" : "column")};
  grid-template-columns: ${(props) =>
    props.showListType ? "33% 33% 33%" : "100%"};
  align-items: center;
`;

const ModalTitleDiv = styled.div`
  font-weight: bold;
  padding-left: 10px;
  font-size: 1.2rem;
`;

export default function SearchList(props) {
  //TODO: Como minimizar esta logica?
  // console.log("Rendering SearchList");

  const { searchMedia, topSearches } = useContext(SearchContext);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    searchMedia.length > 0 &&
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${searchMedia}&api_key=a737035cefb22acd96f01ffdcf8f4f7b&page=1`
        )
        .then((res) => {
          setSearchedData(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [searchMedia]);

  let renderingContent;
  let showListType;
  if (searchMedia.length == 0) {
    renderingContent = <ListNoInput media={topSearches} />;
    showListType = 2;
  }
  if (searchMedia.length > 0 && searchedData && searchedData.length > 0) {
    renderingContent = <FoundMedia media={searchedData} />;
    showListType = 0;
  }

  if (searchMedia.length > 0 && searchedData.length == 0) {
    renderingContent = <NoFound />;
    showListType = 1;
  }

  const titleToShow =
    showListType === 0 ? "Movies" : showListType === 2 ? "Top Searches" : "";

  return (
    <React.Fragment>
      {showListType !== 1 && <ModalTitleDiv>{titleToShow}</ModalTitleDiv>}
      <SearchListDiv
        searchedDatad={searchMedia.length > 0}
        showListType={showListType < 1}
        style={{ scrollBehavior: "smooth", overflow: "scroll" }}
      >
        {renderingContent}
      </SearchListDiv>
    </React.Fragment>
  );
}
