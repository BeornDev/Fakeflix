import Head from "next/head";
import { useContext } from "react";
import MoviesContext from "../store/movies-context";

//Components
import MainView from "../components/MainView/MainView";
import Vertical from "../components/Carousel/Vertical/Vertical";
import Horizontal from "../components/Carousel/Horizontal/Horizontal";
import Numbered from "../components/Carousel/Numbered/Numbered";
import React from "react";

const Home = () => {
  const MovesCtx = useContext(MoviesContext);
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
