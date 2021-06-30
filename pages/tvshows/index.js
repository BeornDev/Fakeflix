import React from "react";
import CarouselFactory from "../../components/Carousel/CarouselFactory";
import MainView from "../../components/MainView/MainView";

const carouselList = [
  {
    media_type: "tv",
    list_type: "top_rated",
    title: "Top Rated",
  },
  {
    media_type: "tv",
    list_type: "popular",
    title: "Popular",
  },
  {
    media_type: "tv",
    list_type: "on_the_air",
    title: "On The Air",
  },
  {
    media_type: "tv",
    list_type: "airing_today",
    title: "Airing Today",
  },
];
export default function index() {
  console.log("TV Shows Page Render");
  return (
    <React.Fragment>
      <MainView media_type="tv" />
      {carouselList.map(({ media_type, list_type, title }) => (
        <CarouselFactory
          key={title}
          media_type={media_type}
          list_type={list_type}
          title={title}
        />
      ))}
    </React.Fragment>
  );
}
