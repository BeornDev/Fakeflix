import { useState, useEffect } from "react";

//Components
import Header from "../components/Header/Header";
import MainView from "../components/MainView/MainView";
import Vertical from "../components/Carousel/Vertical/Vertical";
import Horizontal from "../components/Carousel/Horizontal/Horizontal";
import Numbered from "../components/Carousel/Numbered/Numbered";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div onScroll={(e) => console.log(e)}>
      <MainView />
      {/* <Numbered /> */}
      <Vertical name="top_rated" title="Top Rated Movies" />
      {/* <Vertical name="now_playing" title="Now Playing Movies" /> */}
      {/* <Vertical name="upcoming" title="Upcoming Movies" /> */}
      {/* <Horizontal /> */}
    </div>
  );
}
