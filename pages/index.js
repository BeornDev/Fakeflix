import { useState, useEffect, useContext } from "react";
import MoviesContext from "../store/movies-context";
import Head from "next/head";
import axios from "axios";

//Components
import MainView from "../components/MainView/MainView";
import Vertical from "../components/Carousel/Vertical/Vertical";
import Horizontal from "../components/Carousel/Horizontal/Horizontal";
import Numbered from "../components/Carousel/Numbered/Numbered";
import React from "react";

export default function Home() {
  const { settingGenres } = useContext(MoviesContext);
  let genresArray = [];
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        genresArray = res.data.genres;
        settingGenres(genresArray);
      });
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
      <MainView seccionType="tv" />
      {/* <Numbered /> */}
      <Vertical name="top_rated" title="Top Rated Movies" />
      <Vertical name="now_playing" title="Now Playing Movies" />
      {/* <Vertical name="upcoming" title="Upcoming Movies" /> */}
      {/* <Horizontal /> */}
    </React.Fragment>
  );
}
