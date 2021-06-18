import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./Numbered.module.css";

export default function CarouselHorizontal() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        setNowPlaying(res.data.results.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.containerCarousel}>
      <h2>Now Playing Movies</h2>
      <div className={classes.slider}>
        {nowPlaying.map((m, i) => {
          if (i < 6) {
            // TODO: pendiente funcionalidad del hover
            return (
              <li
                onClick={() => {
                  console.log(m.title);
                }}
                className={classes.movieItem}
                key={m.title}
              >
                <div className={classes.numberOnList}>
                  <div>{i + 1}</div>
                </div>
                <img
                  className={classes.cover}
                  src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                />
              </li>
            );
          }
          return;
        })}
      </div>
    </div>
  );
}
