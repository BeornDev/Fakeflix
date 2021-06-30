import React, { useEffect, useContext, useState } from "react";
import Head from "next/head";
import axios from "axios";

//Components
import MainView from "../components/MainView/MainView";
import CarouselFactory from "../components/Carousel/CarouselFactory";

const carouselList = [
  {
    media_type: "movie",
    list_type: "popular",
    title: "Popular Movies",
  },
  {
    media_type: "tv",
    list_type: "popular",
    title: "Popular Tv Shows",
  },
  {
    media_type: "movie",
    list_type: "now_playing",
    title: "Now Playing Movies",
  },
  {
    media_type: "tv",
    list_type: "on_the_air",
    title: "On The Air Tv Shows",
  },
];

const Home = (props) => {
  console.log("Home Page Render");
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
};
export default Home;

// export async function getStaticProps(context) {
//   console.log(process.env.customKey);
//   const resMovies = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b`
//   );
//   const dataMovies = await resMovies.json();
//   const genresMovie = dataMovies.genres;

//   const resTv = await fetch(
//     `https://api.themoviedb.org/3/genre/tv/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b`
//   );
//   const dataTv = await resTv.json();
//   const genresTv = dataTv.genres;

//   if (!dataTv) {
//     return {
//       notFound: true,
//     };
//   }
//   const totalGenres = [...genresMovie, ...genresTv];
//   const uniqueGenres = Array.from(new Set(totalGenres.map((a) => a.id))).map(
//     (id) => {
//       return totalGenres.find((a) => a.id === id);
//     }
//   );

//   return {
//     props: { uniqueGenres }, // will be passed to the page component as props
//   };
// }
