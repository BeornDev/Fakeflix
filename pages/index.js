import Head from "next/head";
import { useContext, useEffect } from "react";
import MediaContext from "../store/media-context";
// import useRqTrending from "../components/hooks/useRqTrending";
import { useGenres } from "../components/hooks/useHttpMedia";

//Components
import MainView from "../components/MainView/MainView";
import Vertical from "../components/Carousel/Vertical/Vertical";
import Horizontal from "../components/Carousel/Horizontal/Horizontal";
import Numbered from "../components/Carousel/Numbered/Numbered";
import React from "react";

const Home = () => {
  const mediaCtx = useContext(MediaContext);
  useGenres();
  useEffect(() => {
    const changeInnerWithHandler = () => {
      window.innerWidth <= 768
        ? mediaCtx.setRenderItems(3)
        : window.innerWidth <= 992
        ? mediaCtx.setRenderItems(4)
        : window.innerWidth <= 1200
        ? mediaCtx.setRenderItems(5)
        : mediaCtx.setRenderItems(6);
    };

    const changeScrollHandler = () => {
      if (window.scrollY <= 80) {
        mediaCtx.toggleScrolling(false);
      } else mediaCtx.toggleScrolling(true);
    };
    window.addEventListener("resize", changeInnerWithHandler);
    window.addEventListener("scroll", changeScrollHandler);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Fakeflix</title>
        <meta
          name="description"
          content="Page based on netflix, my first project"
        />
        <link
          rel="shortcut icon"
          href="https://i.ibb.co/cy5Nv1p/F-netflix.png"
        />
      </Head>
      <MainView seccionType="all" />
      {/* <Numbered /> */}
      <Vertical
        mediaType="tv"
        listType="top_rated"
        title="Top Rated Tv Shows"
      />
      <Vertical
        mediaType="movie"
        listType="top_rated"
        title="Top Rated Movies"
      />

      {/* <Horizontal /> */}
    </React.Fragment>
  );
};
export default Home;
