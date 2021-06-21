import React from "react";

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

  .header-icons__container-avatar {
    height: 80%;
  }
  .search-icon,
  .avatar-icon,
  .notification-icon {
    cursor: pointer;
  }
  .avatar-icon {
    height: 100%;
  }
  .notification-icon {
    display: none;
  }
  @media (min-width: 480px) {
    .notification-icon {
      display: block;
    }
  }
`;

export default function HeaderIcons() {
  //TODO: Pendient funcionalidad de los botones
  return (
    <HeaderIconsDiv>
      <SearchIcon
        className="search-icon"
        onClick={() => console.log("search")}
        style={{ fontSize: 30 }}
      />
      <NotificationsIcon
        onClick={() => console.log("notifications")}
        className="notification-icon"
        style={{ fontSize: 30 }}
      />
      <div className="header-icons__container-avatar">
        <img
          onClick={() => console.log("avatar")}
          className="avatar-icon"
          src="https://cdnb.artstation.com/p/assets/covers/images/011/331/725/large/alex-lusth-thumbnail.jpg?1529019337"
        />
      </div>
    </HeaderIconsDiv>
  );
}
