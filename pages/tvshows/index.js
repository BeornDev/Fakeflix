import React from "react";
import Vertical from "../../components/Carousel/Vertical/Vertical";

import MainView from "../../components/MainView/MainView";

export default function index() {
  return (
    <React.Fragment>
      <MainView seccionType="tv" />
      <Vertical mediaType="tv" listType="on_the_air" title="On The Air" />
      <Vertical mediaType="tv" listType="top_rated" title="Top Rated" />
      <Vertical mediaType="tv" listType="popular" title="Popular" />
      <Vertical mediaType="tv" listType="airing_today" title="Airing today" />
    </React.Fragment>
  );
}
