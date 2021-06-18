import React, { useState, useEffect } from "react";
import classes from "./Vertical.module.css";
import axios from "axios";

export default function CarouselVertical(props) {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        setTopRated(res.data.results.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.containerCarousel}>
      <h2>Top Rated Movies</h2>
      <div className={classes.slider}>
        {topRated.map((m, i) => (
          // TODO: pendiente funcionalidad del hover
          <li className={classes.movieItem} key={m.title}>
            <img
              className={classes.cover}
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
            />
            <div className={classes.containerDetail}>
              <h3>{m.title}</h3>
              <p>{m.popularity}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
