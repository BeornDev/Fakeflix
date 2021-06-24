import React from "react";
import Carousel from "../../components/Carousel/Carousel";

import MainView from "../../components/MainView/MainView";

export default function index() {
  console.log("moviesComponent");
  return (
    <React.Fragment>
      <MainView seccionType="movie" />
      <Carousel mediaType="movie" listType="upcoming" title="Upcoming Movies" />
      <Carousel mediaType="movie" listType="top_rated" title="Top Rated" />
      <Carousel mediaType="movie" listType="popular" title="Popular" />
      <Carousel mediaType="movie" listType="now_playing" title="Trending Now" />
    </React.Fragment>
  );
}
