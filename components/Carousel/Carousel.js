import useHttpRquest from "../hooks/useHttpRquest";
import styled from "styled-components";
import { useContext, useRef } from "react";
import MediaContext from "../../store/media-context";

import ItemCarousel from "./ItemCarousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const VerticalCarouselDiv = styled.div`
  color: #fff;
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: relative;
  margin-bottom: 2vw;

  .title-carousel {
  }
  .content-carousel {
    display: grid;
    grid-template-columns: repeat(20, 33%);
    overflow-y: scroll;
    scroll-behavior: smooth;
    gap: 5px;
    height: 90%;
  }
  .content-carousel::-webkit-scrollbar {
    display: none;
  }
  .arrow-left-carousel,
  .arrow-right-carousel {
    position: absolute;
    bottom: 0;
    height: 88%;
    width: 60px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .arrow-left-carousel {
    left: -25px;
  }

  .arrow-right-carousel {
    right: -25px;
  }
  @media (min-width: 768px) {
    height: 15vh;

    .content-carousel {
      grid-template-columns: repeat(20, calc(100% / 4));
    }
  }
  @media (min-width: 992px) {
    height: 16vh;
    .content-carousel {
      grid-template-columns: repeat(20, calc(100% / 5));
    }
  }
  @media (min-width: 1200px) {
    height: 17vh;
    .content-carousel {
      grid-template-columns: repeat(20, calc(100% / 6));
    }
  }

  //full 6, 1400 5, 1100 4, 800 3
`;

export default function CarouselVertical(props) {
  const mediaReceived = useHttpRquest(props.mediaType, props.listType);
  const mediaCtx = useContext(MediaContext);
  const listRef = useRef();
  // TODO: pendiente funcionalidad del hover

  const widthCarousel = Math.floor(listRef.current?.scrollWidth);
  const stepToMoveCarousel = Math.floor(
    widthCarousel / (mediaReceived.length / mediaCtx.renderItems)
  );

  const moveRightCarousel = () => {
    listRef.current.scrollLeft + stepToMoveCarousel < widthCarousel
      ? (listRef.current.scrollLeft =
          listRef.current.scrollLeft + stepToMoveCarousel)
      : (listRef.current.scrollLeft = 0);
  };
  const moveLeftCarousel = () => {
    listRef.current.scrollLeft - stepToMoveCarousel > 0
      ? (listRef.current.scrollLeft =
          listRef.current.scrollLeft - stepToMoveCarousel)
      : (listRef.current.scrollLeft = 0);
  };

  //TODO: toca darle dos veces a las flechas para la accion

  const genresByText = (genres_ids, media_type) => {
    const genresArray =
      media_type === "tv" ? mediaCtx.genresTv : mediaCtx.genresMovie;
    return genres_ids
      .map(
        (genreMedia) =>
          genresArray?.find((gText) => gText.id === genreMedia)?.name
      )
      .join(" - ");
  };
  //TODO: creo que problema de la API no tienes todos los generos que usa.
  return (
    <VerticalCarouselDiv>
      <div className="title-carousel">
        <ChevronLeftIcon
          onClick={moveLeftCarousel}
          className="arrow-left-carousel"
        />
        {props.title}
        <ChevronRightIcon
          onClick={moveRightCarousel}
          className="arrow-right-carousel"
        />
      </div>
      <ul ref={listRef} className="content-carousel">
        {mediaReceived.map((m) => (
          <ItemCarousel
            bgMediaPoster={`https://image.tmdb.org/t/p/w300${
              mediaCtx.renderItems < 4
                ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                : `https://image.tmdb.org/t/p/w500${m.backdrop_path}`
            }`}
            genres={genresByText(m.genre_ids, props.mediaType)}
            onHandlerClick={() => console.log(m, mediaCtx.genresTv)}
            key={m.id}
          />
        ))}
      </ul>
    </VerticalCarouselDiv>
  );
}
