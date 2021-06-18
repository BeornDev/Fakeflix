import React, { useState, useEffect } from "react";
import classes from "./MainView.module.css";
import Numbered from "../Carousel/Numbered/Numbered";
import axios from "axios";

export default function MainView(props) {
  const [popular, setpopular] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        setpopular(res.data.results.slice(0, 2)[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.mainView}>
      <div className={classes.billlboard}>
        <img
          className={classes.staticImage}
          src={`https://image.tmdb.org/t/p/w1280${popular.backdrop_path}`}
        />
        <div className={classes.logoAndText}>
          <img
            src="https://fanart.tv/fanart/movies/423108/hdmovielogo/the-conjuring-the-devil-made-me-do-it-60a2c81802a42.png"
            className={classes.logoMovie}
          />
          <h2 className={classes.watchIt}>Watch it now!</h2>
          <p className={classes.infoMovie}>{popular.overview}</p>
          <div className={classes.btnsContainer}>
            <button className={classes.btn}>Play</button>
            <button className={classes.btn}>More Info</button>
          </div>
        </div>
      </div>
      <Numbered />
    </div>
  );
}
