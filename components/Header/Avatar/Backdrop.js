import React, { useContext } from "react";
import styled from "styled-components";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AvatarsContext from "../../../store/avatars-context";

const DropDownDiv = styled.div`
  position: absolute;
  top: 125%;
  right: -15%;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  width: 160px;
  font-size: 0.7rem;
  transition: all 2s;
  border: solid 1px rgba(255, 255, 255, 0.6);
  display: ${(props) => (props.showDropDown ? "flex" : "none")};

  .arrowup-icon-avatar {
    position: absolute;
    top: -6%;
    right: 15%;
    transform: translateX(50%);
  }
  .avatar-created {
    padding: 6px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.6);
  }
  .list-item-avatars {
    display: flex;
    margin-top: 10px;
    width: 100%;
    min-height: 35px;
    align-items: center;
    font-size: 14px;
  }
  .avatar-icon-onlist {
    width: 25%;
    border-radius: 5px;
  }
  .other-opc-avatar {
    font-weight: bold;
    padding: 0 5px;
  }
`;

export default function Backdrop(props) {
  const { avatars, changeAvatar } = useContext(AvatarsContext);
  //TODO: falata ajustar esto como styled.
  return (
    <DropDownDiv showDropDown={props.showDropDown}>
      <ArrowDropUpIcon
        style={{ fontSize: 30 }}
        className="arrowup-icon-avatar"
      />
      <div className="avatar-created">
        {avatars.map((avatar) => (
          <div key={avatar.id} className="list-item-avatars">
            <img
              onClick={() => changeAvatar(avatar.id)}
              className="avatar-icon-onlist"
              src={avatar.icon}
              style={{ backgroundColor: `${avatar.color}` }}
            />
            <div key={avatar.name}>{avatar.name}</div>
          </div>
        ))}
        <div className="list-item-avatars">
          <div>Manage Profiles</div>
        </div>
      </div>
      <p className="other-opc-avatar">Account</p>{" "}
      <p className="other-opc-avatar">Help Center</p>{" "}
      <p className="other-opc-avatar">Sign of out Netflix</p>
    </DropDownDiv>
  );
}
