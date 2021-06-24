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
  align-items: flex-end;

  &:hover .image-item-carousel {
    /* height: 130%; */
  }

  &:hover .carousel-btns {
    display: flex;
  }
  .image-item-carousel {
    border-radius: 10px;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: 0.5s all;
    background-position: center;
    background-size: cover;
    background-image: url("https://images-na.ssl-images-amazon.com/images/I/71OB1IywjLL._AC_SY679_.jpg");
    z-index: 5;
  }

  .genres-item {
    color: #fff;
    position: relative;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .carousel-btns {
    display: none;
    pointer-events: none;
    width: 100%;
    /* height: 20%; */

    position: relative;
    z-index: 7;

    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .carousel-btns > * {
    font-size: 25px;
    border-radius: 50%;
    border: solid white 2px;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
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
      <p className="genres-item">{props.genres}</p>
    </ItemCarouselDiv>
  );
}
