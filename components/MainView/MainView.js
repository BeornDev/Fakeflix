import React, { useEffect } from "react";

//Components
import Loader from "../../Layout/Loader";
import Button from "../../Layout/Btn";

import styled from "styled-components";

//Material icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import useRequestMedia from "../hooks/useRequestMedia";

const MainViewDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80vh;
  position: relative;
  background: linear-gradient(rgba(255, 255, 255, 0) 60%, #1d1d1d),
    url(${(props) => props.poster});
  background-position: center;
  background-size: cover;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  color: #fff;
  margin-bottom: 2vw;

  .genres {
    position: relative;
    text-align: center;
    font-size: 0.7rem;
  }

  .details {
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
  }
  .infoBtn {
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
  }

  .details-screen {
    display: none;
    padding-left: 2vw;
    height: 55%;
  }
  .overview {
    width: 40%;
  }

  .containerBtns {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  @media (min-width: 768px) {
    background: linear-gradient(rgba(255, 255, 255, 0) 60%, #1d1d1d),
      url(${(props) => props.backdrop});
    background-position: center;
    background-size: cover;
    justify-content: flex-start;

    margin-bottom: -12vw;

    .containerBtns,
    .genres {
      display: none;
    }

    .details-screen {
      display: block;
    }
  }
  @media (min-width: 992px) {
    height: 90vh;
    .overview {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1200px) {
    height: 100vh;
    .overview {
    }
  }
`;

export default function MainView(props) {
  console.log("MainView Renderd");
  useEffect(() => {
    console.log("once");
  }, []);
  const { media, error } = useRequestMedia({
    media_type: props.media_type,
    list_type: "trending",
    time_window: "day",
  });

  if (media !== null && props.genres) {
    const poster =
      media[0].poster_path == null
        ? `https://images-na.ssl-images-amazon.com/images/I/61ljrN7zmoL._AC_SL1024_.jpg`
        : `https://image.tmdb.org/t/p/w1280${media[0]?.poster_path}`;
    const backdrop =
      media[0].backdrop_path == null
        ? `https://wallpapercave.com/wp/wp1935890.jpg`
        : `https://image.tmdb.org/t/p/w1280${media[0]?.backdrop_path}`;

    const genresText = media[0].genre_ids
      .map((g) => props.genres.find((gRq) => gRq.id === g).name)
      .join(" - ");

    return (
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
          <p className="overview">{media[0]?.overview}</p>
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

  return (
    <MainViewDiv style={{ alignItems: "center" }}>
      <Loader />
    </MainViewDiv>
  );
}
