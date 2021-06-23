import React from "react";
import styled from "styled-components";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ItemCarouselDiv = styled.li`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .image-item-carousel {
    border-radius: 10px;
    position: relative;
    height: 100%;
    width: 100%;
    transition: 0.5s all;
    background-position: center;
    background-size: cover;
    background-image: url("https://images-na.ssl-images-amazon.com/images/I/71OB1IywjLL._AC_SY679_.jpg");
    z-index: 8;
  }

  .carousel-btns {
    width: 100%;
    height: 20%;
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    display: none;
    pointer-events: none;
  }

  .carousel-btns > * {
    border-radius: 50%;
    border: solid white 2px;
  }

  @media (min-width: 768px) {
  }
`;

export default function imageCarousel(props) {
  return (
    <ItemCarouselDiv>
      <div
        onClick={() => props.onHandlerClick()}
        style={{ backgroundImage: `url('${props.bgMediaPoster}')` }}
        className="image-item-carousel"
      />
      <div className="carousel-btns">
        <PlayArrowIcon />
        <ThumbUpAltOutlinedIcon />
        <ThumbDownAltOutlinedIcon />
        <ClearOutlinedIcon />
        <AddIcon />
        <ExpandMoreIcon />
      </div>
    </ItemCarouselDiv>
  );
}
