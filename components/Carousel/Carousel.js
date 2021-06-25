import useHttpRquest from "../hooks/useHttpRquest";
import styled from "styled-components";
import { useContext, useRef, useEffect, useState } from "react";
import MediaContext from "../../store/media-context";

import ItemCarousel from "./ItemCarousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const VerticalCarouselDiv = styled.div`
  color: #fff;
  height: 30vh;
  padding: 0 2vw;
  position: relative;
  margin-bottom: 2vw;
  gap: 0.5vw;
  display: flex;
  flex-direction: column;

  .title-carousel {
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: -0.5px;
  }

  &:hover .arrow-left-carousel,
  &:hover .arrow-right-carousel {
    display: block;
    pointer-events: all;
  }

  .content-carousel {
    //List
    display: grid;
    grid-template-columns: repeat(20, 33%);
    gap: 5px;
    height: 90%;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  .content-carousel::-webkit-scrollbar {
    //Hide the scroll bar
    display: none;
  }

  .arrow-left-carousel,
  .arrow-right-carousel {
    position: absolute;
    bottom: -2%;
    height: 90%;
    width: 60px;
    z-index: 10;
    /* background-color: rgba(0, 0, 0, 0.3); */
    display: none;
    pointer-events: none;
  }
  .arrow-left-carousel {
    left: -1vw;
  }

  .arrow-right-carousel {
    right: -1vw;
  }
  @media (min-width: 768px) {
    height: 16vw;

    .content-carousel {
      grid-template-columns: repeat(20, calc(100% / 4));
    }
  }
  @media (min-width: 992px) {
    height: 14vw;
    .content-carousel {
      grid-template-columns: repeat(20, calc(100% / 5));
    }
  }
  @media (min-width: 1200px) {
    height: 11vw;
    .content-carousel {
      grid-template-columns: repeat(20, calc(100% / 6));
    }
  }
`;

export default function Carousel(props) {
  const mediaReceived = useHttpRquest(props.mediaType, props.listType);
  const mediaCtx = useContext(MediaContext);
  const [showLeftArrow, setshowLeftArrow] = useState(false);
  const listRef = useRef();

  //TODO: minimizar logica.. del movimiento del carousel

  const moveCarousel = (dir) => {
    setshowLeftArrow(listRef.current.scrollLeft !== 0);
    const { scrollLeft, scrollWidth } = listRef.current ?? listRef.current;

    //Logica del movimiento del carousel
    const carouselParts = mediaReceived.length / mediaCtx.renderItems;
    const stepOnPixels = scrollWidth / carouselParts;

    console.log(
      scrollLeft,
      scrollWidth,
      mediaReceived.length,
      mediaCtx.renderItems,
      scrollWidth
    );
    if (dir === "right") {
      if (scrollLeft + stepOnPixels < scrollWidth) {
        listRef.current.scrollLeft = scrollLeft + stepOnPixels;
        setshowLeftArrow(true);
      } else {
        listRef.current.scrollLeft = 0;
        setshowLeftArrow(false);
      }
    }
    if (dir === "left") {
      if (scrollLeft - stepOnPixels > 0) {
        listRef.current.scrollLeft = scrollLeft - stepOnPixels;
        setshowLeftArrow(true);
      } else {
        listRef.current.scrollLeft = 0;
        setshowLeftArrow(false);
      }
    }
  };

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
  //TODO: creo que es el problema de la API ya no tiene todos los generos que usa.
  return (
    <VerticalCarouselDiv>
      <div className="title-carousel">
        {showLeftArrow && (
          <ChevronLeftIcon
            onClick={() => moveCarousel("left")}
            className="arrow-left-carousel"
          />
        )}
        {props.title}
        <ChevronRightIcon
          onClick={() => moveCarousel("right")}
          className="arrow-right-carousel"
        />
      </div>
      <ul ref={listRef} className="content-carousel">
        {mediaReceived.map((m) => (
          <ItemCarousel
            genres={genresByText(m.genre_ids.slice(0, 2), props.mediaType)}
            key={m.id}
            media={m}
          />
        ))}
      </ul>
    </VerticalCarouselDiv>
  );
}
