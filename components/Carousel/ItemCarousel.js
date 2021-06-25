import React from "react";
import styled from "styled-components";

//Material icons
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
  align-items: flex-end;
  background: url(${(props) => props.poster}) center/cover;
  border-radius: 5px;
  overflow: hidden;

  .carousel-hided-content {
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    gap: 5px;
    transform: translateY(100%);
    transition: 1s all;
  }

  &:hover .carousel-hided-content {
    transform: translateY(0);
  }

  .casorusel-vote-genres {
    display: flex;
    justify-content: space-between;
    width: 90%;
    font-weight: bold;
  }
  .genres-item {
    margin: 0;
    font-size: 0.8rem;
  }

  .carousel-btns {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }

  .carousel-btns > * {
    font-size: 22px;
    border-radius: 50%;
    border: solid white 2px;
  }

  @media (min-width: 768px) {
    background: url(${(props) => props.backdrop}) center/cover;
  }
`;

export default function imageCarousel(props) {
  const { poster_path, backdrop_path } = props.media;
  const poster =
    poster_path == null
      ? `https://wallpapercave.com/wp/wp1935890.jpg`
      : `https://image.tmdb.org/t/p/w300${poster_path}`;
  const backdrop =
    backdrop_path == null
      ? `https://wallpapercave.com/wp/wp1935890.jpg`
      : `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <ItemCarouselDiv poster={poster} backdrop={backdrop}>
      <div className="carousel-hided-content">
        <div className="casorusel-vote-genres">
          <p className="genres-item">{props.genres}</p>
          <p className="genres-item">{props.media.vote_average}</p>
        </div>
        <div className="carousel-btns">
          <PlayArrowIcon onClick={() => console.log("play")} />
          <ThumbUpAltOutlinedIcon onClick={() => console.log("like")} />
          <ThumbDownAltOutlinedIcon onClick={() => console.log("dislike")} />
          <ClearOutlinedIcon
            onClick={() => console.log("delete from my list")}
          />
          <AddIcon onClick={() => console.log("add to my list")} />
          <ExpandMoreIcon onClick={() => console.log("info", props.media)} />
        </div>
      </div>
    </ItemCarouselDiv>
  );
}
