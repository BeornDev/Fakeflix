import React from "react";

import styled from "styled-components";

import HeaderNotifications from "./HeaderNotifications";
import HeaderAvatar from "./Avatar/HeaderAvatar";
import HeaderSearch from "./HeaderSearch";

import { AvatarsProvider } from "../../store/avatars-context";

//Styled
const HeaderIconsDiv = styled.div`
  grid-area: C;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  position: relative;
  gap: 1.5vw;

  @media (min-width: 768px) {
  }
`;

export default function HeaderIcons(props) {
  //TODO: Pendient funcionalidad de los botones
  return (
    <HeaderIconsDiv>
      <HeaderSearch />
      <HeaderNotifications />
      <AvatarsProvider>
        <HeaderAvatar />
      </AvatarsProvider>
    </HeaderIconsDiv>
  );
}
