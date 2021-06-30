import React, { useContext, useRef } from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

import SearchContext from "../../../store/search-context";

const SearchInputDiv = styled.div`
  grid-area: E;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
  background: #fff;
  color: grey;

  input {
    position: relative;
    width: 100%;
    padding: 0 12%;
    text-decoration: underline;
    border: none;
    transition: 0.5s all;
  }

  input:focus {
    transform: scale(105%);
    padding: 0 13%;
  }

  .iconSearch,
  .iconMic {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
  }
  .iconSearch {
    left: 3%;
  }
  .iconMic {
    right: 3%;
  }
`;

export default function Input() {
  const { setMediaSearched } = useContext(SearchContext);
  const searchRef = useRef();
  return (
    <SearchInputDiv>
      <SearchIcon className="iconSearch" />
      <input
        onChange={() => setMediaSearched(searchRef.current.value)}
        ref={searchRef}
      />
      <MicIcon className="iconMic" />
    </SearchInputDiv>
  );
}
