import React, { useState, useContext } from "react";
import styled from "styled-components";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Backdrop from "./Backdrop";

import AvatarsContext from "../../../store/avatars-context";

const HeaderAvatarDiv = styled.div`
  height: 80%;
  position: relative;

  .avatar-icon {
    height: 100%;
    border-radius: 5px;
    background-color: red;
  }
`;

const ArrowDropDownDiv = styled.div`
  position: absolute;
  top: 50%;
  right: -60%;
  transform: translateY(-50%);
  transition: 0.5s all;

  &:hover {
    transform: rotate(180deg) translateY(50%);
  }
`;

const AvatarImage = styled.img`
  height: 100%;
  border-radius: 5px;
  background-color: red;
  font-size: 30;
`;

export default function HeaderAvatar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const { avatarToShow } = useContext(AvatarsContext);
  return (
    <HeaderAvatarDiv
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <AvatarImage
        style={{ backgroundColor: `${avatarToShow.color}` }}
        src={`${avatarToShow.icon}`}
      />
      <ArrowDropDownDiv>
        <ArrowDropDownIcon />
      </ArrowDropDownDiv>
      <Backdrop showDropDown={showDropDown} />
    </HeaderAvatarDiv>
  );
}
