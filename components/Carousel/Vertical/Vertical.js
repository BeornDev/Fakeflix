import useHttpRquest from "../../hooks/useHttpRquest";
import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import MoviesContext from "../../../store/movies-context";
// import useWindowWidth from "../../hooks/useWindowWidth ";

import ItemCarousel from "./ItemCarousel";

const VerticalCarouselDiv = styled.div`
  color: #fff;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  .title-carousel {
  }
  .content-carousel {
    display: grid;
    /* grid-template-columns: repeat(20, 33%); */
    overflow-y: hidden;
    scroll-behavior: smooth;
    gap: 5px;
    height: 90%;
  }
  .content-carousel::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    height: 15vh;
  }
  @media (min-width: 992px) {
    height: 16vh;
  }
  @media (min-width: 1200px) {
    height: 17vh;
  }

  //full 6, 1400 5, 1100 4, 800 3
`;

export default function CarouselVertical(props) {
  const [scrollItem, setScrollItem] = useState(700);
  const topRated = useHttpRquest(props.mediaType, props.listType);
  const { windowWidth } = useContext(MoviesContext);
  const listRef = useRef();
  // TODO: pendiente funcionalidad del hover

  const itemsByWith = Math.floor(windowWidth / 200);
  const gridItems = itemsByWith > 6 ? 6 : itemsByWith < 3 ? 3 : itemsByWith;
  const gridItemsByAPercentage = Math.ceil(100 / gridItems);

  const clickHandlerTitle = () => {
    const sizeItem = Math.floor(listRef.current.scrollWidth);
    const goToScroll = Math.ceil(sizeItem / gridItems);
    console.log(goToScroll);
    if (scrollItem + goToScroll >= sizeItem) {
      setScrollItem(0);
    } else {
      setScrollItem((prevState) => prevState + goToScroll);
    }
    listRef.current.scrollLeft = scrollItem;
  };

  return (
    <VerticalCarouselDiv>
      <div onClick={clickHandlerTitle} className="title-carousel">
        {props.title}
      </div>
      <ul
        ref={listRef}
        className="content-carousel"
        style={{
          gridTemplateColumns: `repeat(${topRated.length}, ${gridItemsByAPercentage}%)`,
        }}
      >
        {topRated.map((m) => (
          <ItemCarousel
            bgMediaPoster={`https://image.tmdb.org/t/p/w300${
              windowWidth < 768
                ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                : `https://image.tmdb.org/t/p/w500${m.backdrop_path}`
            }`}
            onHandlerClick={() => console.log(m)}
            key={m.id}
          />
        ))}
      </ul>
    </VerticalCarouselDiv>
  );
}
