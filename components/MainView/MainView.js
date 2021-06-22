import useRqTrending from "../hooks/useRqTrending";

import { useContext } from "react";
import MoviesContext from "../../store/movies-context";

import Button from "../../Layout/Btn";
import styled from "styled-components";

const MainViewDiv = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80vh;
  position: relative;
  /* background: url("https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"); */
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  color: #fff;

  .genres {
    position: relative;
    text-align: center;
    font-size: 0.7rem;
  }

  .containerBtns {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }

  @media (min-width: 320px) {
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
`;

export default function MainView(props) {
  const { genresArray } = useContext(MoviesContext);
  const media = useRqTrending(props.seccionType);
  if (
    media[0] &&
    media[0].genre_ids.length !== 0 &&
    genresArray &&
    genresArray.length !== 0
  ) {
    console.log("woring in theory");
    const popularPoster = `https://image.tmdb.org/t/p/w500${media[0].poster_path}`;
    const genresMovie = media[0].genre_ids;
    // const reducingGenreText = genresMovie
    //   .map(
    //     (genreMedia) =>
    //       genresArray.find((genreItem) => genreItem.id === genreMedia).name
    //   )
    //   .join(" - ");
    return (
      <MainViewDiv
        style={{
          backgroundImage: `url('${popularPoster}')`,
        }}
      >
        <div className="details">
          <p className="genres"> sss </p>
          <div className="containerBtns">
            <Button btnType="add" />
            <Button btnType="play" />
            <Button btnType="info" />
          </div>
        </div>
      </MainViewDiv>
    );
  } else {
    return (
      <MainViewDiv style={{ alignItems: "center" }}>
        <div className="lds-hourglass"></div>
      </MainViewDiv>
    );
  }
}
