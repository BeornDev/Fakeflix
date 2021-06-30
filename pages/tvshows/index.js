import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import MainView from "../../components/MainView/MainView";

export default function index() {
  console.log("TV Shows Page Render");
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
