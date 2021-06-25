import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { useContext, useEffect } from "react";
import MediaContext from "../../store/media-context";

import MainView from "../../components/MainView/MainView";

export default function index() {
  const mediaCtx = useContext(MediaContext);
  useEffect(() => {
    window.innerWidth <= 768
      ? mediaCtx.setRenderItems(3)
      : window.innerWidth <= 992
      ? mediaCtx.setRenderItems(4)
      : window.innerWidth <= 1200
      ? mediaCtx.setRenderItems(5)
      : mediaCtx.setRenderItems(6);

    const changeScrollHandler = () => {
      if (window.scrollY <= 80) {
        mediaCtx.toggleScrolling(false);
      } else mediaCtx.toggleScrolling(true);
    };
    window.addEventListener("scroll", changeScrollHandler);
  }, []);
  return (
    <React.Fragment>
      <MainView seccionType="tv" />
      <Carousel mediaType="tv" listType="on_the_air" title="On The Air" />
      <Carousel mediaType="tv" listType="top_rated" title="Top Rated" />
      <Carousel mediaType="tv" listType="popular" title="Popular" />
      <Carousel mediaType="tv" listType="airing_today" title="Airing today" />
    </React.Fragment>
  );
}
