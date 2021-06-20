// import React, { useState } from "react";
import styled from "styled-components";
import { useHttpRqSimilar } from "../components/hooks/useHttpRquest";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

const SearchModalDiv = styled.div`
  background: #000;
  position: absolute;
  width: 100%;
  z-index: 8;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 1s all;
  opacity: 0;
  transform: translateX(0);

  &.showModal-enter-active {
    opacity: 0;
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
  .searchIconsBar {
    width: 100%;
    display: flex;
    height: 7vh;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin-top: 10px;
  }
  .containerAvatar {
    height: 100%;
  }
  .containerAvatar .avatar {
    border-radius: 5px;
    height: 100%;
    background: purple;
  }
  .searchInputField {
    margin: 0 6px;
    position: relative;
    background: grey;
    display: flex;
    justify-content: center;
  }

  .searchInputField input {
    background: transparent;
    width: 80%;
    height: 4vh;
    color: #fff;
    text-decoration: underline;
    border: none;
  }
  //TODO: cambiar la psudo class focus visible

  .searchInputField_iconSearch {
    position: absolute;
    top: 15%;
    left: 3%;
  }
  .searchInputField_iconMic {
    position: absolute;
    top: 15%;
    right: 3%;
  }

  .searchTitle {
    font-weight: bold;
    padding-left: 10px;
    font-size: 1.2rem;
  }
  .listSearch {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .listSearch_item {
    background: rgba(259, 259, 259, 0.2);
    display: grid;
    grid-template-columns: 30% 54% 15%;
    align-items: center;
  }
  .listSearch_item__img {
    width: 100%;
  }
  .listSearch_item__title {
    font-size: 0.8rem;
    font-weight: lighter;
    text-align: center;
  }
  .listSearch_item__icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1rem;
  }
  .listSearch_item__icon__border {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`;

export default function SearchModal(props) {
  const searchSimilar = useHttpRqSimilar(337404);
  const backHandler = () => {
    props.onClose();
  };
  return (
    <SearchModalDiv className={props.showModal && "hideModal"}>
      <div className="searchIconsBar">
        <ArrowBackIcon style={{ fontSize: 40 }} onClick={backHandler} />
        <div className="containerAvatar">
          <img
            className="avatar"
            src="https://avatars.dicebear.com/api/avataaars/human.svg"
          />
        </div>
      </div>
      <div className="searchInputField">
        <div className="searchInputField_iconSearch">
          <SearchIcon />
        </div>
        <input />
        <div className="searchInputField_iconMic">
          <MicIcon />
        </div>
      </div>
      <div className="searchTitle">{props.title}</div>
      <div className="listSearch">
        {searchSimilar.map((m) => (
          <li className="listSearch_item" key={m.id}>
            <img
              className="listSearch_item__img"
              src={`https://image.tmdb.org/t/p/w300${m.backdrop_path}`}
            />{" "}
            <p className="listSearch_item__title">{m.title}</p>
            <div className="listSearch_item__icon">
              <div className="listSearch_item__icon__border">
                <PlayArrowIcon />
              </div>
            </div>
          </li>
        ))}
      </div>
    </SearchModalDiv>
  );
}
