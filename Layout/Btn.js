import React from "react";
import styled from "styled-components";

//Material UI
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  background-color: transparent;
  position: relative;
  width: 100px;

  p {
    /* font-size: 0.5rem; */
    /* margin: 5px 0; */
    width: 100%;
  }
  .hoverInfo {
    visibility: hidden;
    width: 120px;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .hoverInfo::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
  &:hover .hoverInfo {
    visibility: visible;
    opacity: 1;
  }
  &.btnPlay {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    flex-direction: row;
    height: 50%;
    border-radius: 5px;
    padding-right: 10px;
  }
`;

const btnsList = [
  {
    name: "play",
    class: "btnPlay",
    hover: "Play",
    text: "Play",
    icon: "PlayArrowIcon",
  },
  {
    name: "add",
    class: "addList",
    hover: "Add to my list",
    text: "My List",
    icon: "AddIcon",
  },
  {
    name: "remove",
    class: "removeList",
    hover: "Remove from my list",
    text: "",
    icon: "ClearOutlinedIcon",
  },
  {
    name: "like",
    class: "likeIt",
    hover: "I like this",
    text: "",
    icon: "ThumbUpAltOutlinedIcon",
  },
  {
    name: "dislike",
    class: "dislikeIt",
    hover: "Not for me",
    text: "",
    icon: "ThumbDownAltOutlinedIcon",
  },
  {
    name: "info",
    class: "info",
    hover: "More info",
    text: "Info",
    icon: "InfoOutlinedIcon",
  },
];

export default function Btn(props) {
  const indexBtn = props.btnType
    ? btnsList.findIndex((b) => b.name === props.btnType)
    : 1;
  const clickHandler = () => {
    console.log(btnsList[indexBtn].name);
  };

  //TODO: ver como unificar esta logica
  return (
    <Button className={btnsList[indexBtn].class} onClick={clickHandler}>
      <span className="hoverInfo">{btnsList[indexBtn].hover}</span>
      {btnsList[indexBtn].name === "play" && <PlayArrowIcon />}
      {btnsList[indexBtn].name === "add" && <AddIcon />}
      {btnsList[indexBtn].name === "remove" && <ClearOutlinedIcon />}
      {btnsList[indexBtn].name === "like" && <ThumbUpAltOutlinedIcon />}
      {btnsList[indexBtn].name === "dislike" && <ThumbDownAltOutlinedIcon />}
      {btnsList[indexBtn].name === "info" && <InfoOutlinedIcon />}
      <p>{btnsList[indexBtn].text}</p>
    </Button>
  );
}
