import { useContext, useEffect, useState } from "react";
import MediaContext from "../../store/media-context";
import axios from "axios";

export default function helper() {
  const mediaCtx = useContext(MediaContext);
  useEffect(() => {
    console.log("helper");
    //TODO: Esto es lo qhace renderizar varias veces algunos componentes, al actualizar el context
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        mediaCtx.settingGenresMovie(res.data.genres);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        mediaCtx.settingGenresTv(res.data.genres);
      })
      .catch((error) => console.log(error));
  }, []);
}
