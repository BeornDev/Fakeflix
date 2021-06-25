import React, { useContext, useState } from "react";

import MoviesContext from "../../store/media-context";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

//Material Icons
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

//Styled
const HeaderIconsDiv = styled.div`
  grid-area: C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* transition: 1s all; */
  padding: 0 5px;
  position: relative;

  .inputSearchHeader {
    display: none;
    position: absolute;
    background-color: transparent;
    border: none;
    color: #fff;
    border-radius: 5px;
    width: 0;
    height: 0;
    top: 50%;
    left: -20%;
    transform: translateY(-50%);
    padding: 0 40px;
    /* transform: translateY(-50%) translateX(90%); */
  }

  .search-trasition-enter-active {
  }
  .search-trasition-enter-done {
    transform: translateY(-50%) translateX(-50%);
    width: 260%;
    height: 35px;
    left: -130%;
    background-color: black;
  }
  .search-trasition-exit-active {
  }
  .search-trasition-exit-done {
  }

  .search-icon,
  .avatar-icon,
  .notification-icon {
    cursor: pointer;
  }

  .container-avatar {
    height: 80%;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 0;
    /* background-color: red; */
    /* z-index: 30; */
    transform: translateX(-140%) translateY(-40%);
    transition: all 1s;
  }

  .search-icon.search-input-opened {
    transform: translateX(-850%) translateY(-40%);
  }
  .avatar-icon {
    height: 100%;
    border-radius: 5px;
  }
  .notification-icon {
    display: none;
  }
  @media (min-width: 768px) {
    .notification-icon,
    .inputSearchHeader {
      display: block;
    }
  }
`;

export default function HeaderIcons() {
  const moviesCtx = useContext(MoviesContext);
  const [searchInput, setSearchInput] = useState(false);
  //TODO: Pendient funcionalidad de los botones
  return (
    <HeaderIconsDiv>
      <CSSTransition
        in={searchInput}
        timeout={1000}
        classNames="search-trasition"
        unmountOnExit
      >
        <input className="inputSearchHeader" type="text" />
      </CSSTransition>
      <div
        className={`search-icon ${searchInput ? "search-input-opened" : ""}`}
        // className={`search-icon`}
        onClick={() => {
          moviesCtx.toggleSearch();
          setSearchInput((prevstate) => !prevstate);
          console.log(searchInput);
        }}
      >
        <SearchIcon style={{ fontSize: 30 }} />
      </div>
      <NotificationsIcon
        onClick={() => console.log("notifications")}
        className="notification-icon"
        style={{ fontSize: 30 }}
      />
      <div className="container-avatar">
        <img
          onClick={() => console.log("avatar")}
          className="avatar-icon"
          src="https://cdnb.artstation.com/p/assets/covers/images/011/331/725/large/alex-lusth-thumbnail.jpg?1529019337"
        />
      </div>
    </HeaderIconsDiv>
  );
}
