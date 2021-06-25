import useRqTrending from "../hooks/useRqTrending";

import React, { useContext } from "react";
import MediaContext from "../../store/media-context";

import Loader from "../../Layout/Loader";
import Button from "../../Layout/Btn";

import styled from "styled-components";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const MainViewDiv = styled.div`
  /* overflow: hidden; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80vh;
  position: relative;
  background: url(${(props) => props.poster}) center/cover;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  color: #fff;
  margin-bottom: 2vw;

  .genres {
    position: relative;
    text-align: center;
    font-size: 0.7rem;
  }

  .details {
    /* height: 33%; */
    /* width: 50%; */
    display: flex;
    flex-direction: column;
  }

  .containerBtns-mainview {
    display: flex;
    gap: 2vw;
  }
  .playBtn,
  .infoBtn {
    width: 170px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* background-color: #fff; */
  }
  .infoBtn {
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
  }

  .details-screen {
    display: none;
    padding-left: 2vw;
  }
  .overview {
    width: 40%;
    font-size: 1.3rem;
  }

  .containerBtns {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  @media (min-width: 768px) {
    background: url(${(props) => props.backdrop}) center/cover;
    justify-content: flex-start;
    .containerBtns,
    .genres {
      display: none;
    }

    .details-screen {
      display: block;
      height: 40%;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
`;

export default function MainView(props) {
  const [mediaRq, genresRq] = useRqTrending(props.seccionType);
  const mediaCtx = useContext(MediaContext);

  const poster =
    mediaRq[0]?.poster_path == null
      ? `https://wallpapercave.com/wp/wp1935890.jpg`
      : `https://image.tmdb.org/t/p/w1280${mediaRq[0]?.poster_path}`;
  const backdrop =
    mediaRq[0]?.poster_path == null
      ? `https://wallpapercave.com/wp/wp1935890.jpg`
      : `https://image.tmdb.org/t/p/w1280${mediaRq[0]?.backdrop_path}`;

  const genresText = mediaRq[0]?.genre_ids
    .map((g) => genresRq.find((gRq) => gRq.id === g)?.name)
    .join(" - ");

  return mediaCtx.isLoading ? (
    <MainViewDiv style={{ alignItems: "center" }}>
      <Loader />
    </MainViewDiv>
  ) : (
    <MainViewDiv poster={poster} backdrop={backdrop}>
      <div className="details">
        <p className="genres">{genresText}</p>
        <div className="containerBtns">
          <Button btnType="add" />
          <Button btnType="play" />
          <Button btnType="info" />
        </div>
      </div>
      <div className="details-screen">
        <p className="overview">{mediaRq[0]?.overview}</p>
        <div className="containerBtns-mainview">
          <button onClick={() => console.log("play")} className="playBtn">
            <PlayArrowIcon />
            Play
          </button>
          <button onClick={() => console.log(mediaRq[0])} className="infoBtn">
            <InfoOutlinedIcon />
            More Info
          </button>
        </div>
      </div>
    </MainViewDiv>
  );
}
