import { useContext, useRef, useState } from "react";
import MoviesContext from "../../../store/movies-context";
import styled from "styled-components";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

const SearchHeaderDiv = styled.div`
  height: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 40px 40px;
  grid-template-areas:
    "A B C"
    "E E E";
  //TODO: Pendiente ajuste fixed

  /* &.scrolling {
  position: fixed;
} */

  .arrowSearch {
    grid-area: A;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
  }

  .inputSearch {
    grid-area: E;
    position: relative;
    margin: 6px;
    background: grey;
    display: flex;
    justify-content: center;
    border-radius: 5px;
  }

  .inputSearch input {
    background: transparent;
    width: 80%;
    color: #fff;
    text-decoration: underline;
    border: none;
  }
  //TODO: cambiar la psudo class focus visible
  //TODO: Este compon ente termina muy similar a Header

  .iconSearch {
    position: absolute;
    top: 10%;
    left: 3%;
    cursor: pointer;
  }
  .iconMic {
    position: absolute;
    top: 10%;
    right: 3%;
    cursor: pointer;
  }
  .container-avatar {
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-area: C;
    padding: 0 5px;
  }
  .avatar {
    height: 80%;
    border-radius: 5px;
  }
`;

export default function SearchHeader(props) {
  const moviesCtx = useContext(MoviesContext);
  const searchRef = useRef();
  const changeSearchInput = () => {
    props.onSearchHandler(searchRef.current.value);
  };

  return (
    <SearchHeaderDiv>
      <div className="arrowSearch">
        <ArrowBackIcon
          onClick={() => moviesCtx.toggleSearch()}
          style={{ fontSize: 30 }}
        />
      </div>
      <div className="inputSearch">
        <div className="iconSearch">
          <SearchIcon />
        </div>
        <input type="number" onChange={changeSearchInput} ref={searchRef} />
        <div className="iconMic">
          <MicIcon />
        </div>
      </div>
      <div className="container-avatar">
        <img
          className="avatar"
          src="https://cdnb.artstation.com/p/assets/covers/images/011/331/725/large/alex-lusth-thumbnail.jpg?1529019337"
        />
      </div>
    </SearchHeaderDiv>
  );
}
