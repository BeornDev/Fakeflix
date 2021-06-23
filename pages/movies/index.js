import React from "react";
import Vertical from "../../components/Carousel/Vertical/Vertical";

import MainView from "../../components/MainView/MainView";

export default function index() {
  console.log("moviesComponent");
  return (
    <React.Fragment>
      <MainView seccionType="movie" />
      <Vertical mediaType="movie" listType="upcoming" title="Upcoming Movies" />
      <Vertical mediaType="movie" listType="top_rated" title="Top Rated" />
      <Vertical mediaType="movie" listType="popular" title="Popular" />
      <Vertical mediaType="movie" listType="now_playing" title="Trending Now" />
    </React.Fragment>
  );
}
