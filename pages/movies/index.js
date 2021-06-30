import React from "react";

//Components
import MainView from "../../components/MainView/MainView";
import CarouselFactory from "../../components/Carousel/CarouselFactory";

const carouselList = [
  {
    media_type: "movie",
    list_type: "upcoming",
    title: "Upcoming",
  },
  // {
  //   media_type: "movie",
  //   list_type: "popular",
  //   title: "Popular",
  // },
];

export default function index() {
  console.log("Movies Page Render");
  return (
    <React.Fragment>
      <MainView seccionType="all" />
      {carouselList.map(({ media_type, list_type, title }) => (
        <CarouselFactory
          key={`${media_type} - ${list_type}`}
          media_type={media_type}
          list_type={list_type}
          title={title}
        />
      ))}
    </React.Fragment>
  );
}

//TODO: mirmar stylecomponents
