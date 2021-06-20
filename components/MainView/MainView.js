import useHttpRquest from "../hooks/useHttpRquest";

import Button from "../../Layout/Btn";
import styled from "styled-components";

const MainViewDiv = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80vh;
  position: relative;

  .coverImage {
    outline: solid yellow 3px;
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    height: 110%;
  }
  .genres {
    position: relative;
    color: #fff;
    text-align: center;
    margin: 0;
    font-size: 0.7rem;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  }

  .containerBtns {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 70px;
    /* width: 80%; */
  }
`;

export default function MainView() {
  const [popular, genre] = useHttpRquest("popular");
  const topPopular = popular[9];
  const genresMovie =
    topPopular &&
    topPopular.genre_ids
      .map((gtopMovie) => genre.find((gen) => gen.id === gtopMovie).name)
      .join(" - ");
  const popularPoster = topPopular
    ? `https://image.tmdb.org/t/p/w500${topPopular.poster_path}`
    : "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg";
  return (
    <MainViewDiv>
      <img className="coverImage" src={popularPoster} />
      <div className="details">
        <p className="genres">{genresMovie}</p>
        <div className="containerBtns">
          <Button btnType="add" />
          <Button btnType="play" />
          <Button btnType="info" />
        </div>
      </div>
    </MainViewDiv>
  );
}
