import { useState, useEffect } from "react";
import axios from "axios";

let genresArray = [];
const useHttpRequest = (type) => {
  const [movies, setMovies] = useState([]);

  const httpURL = `https://api.themoviedb.org/3/movie/${type}?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        genresArray = res.data.genres;
      });

    axios
      .get(httpURL)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return [movies, genresArray];
};

export const useHttpRqSimilar = (id) => {
  const [similar, setSimilar] = useState([]);
  const httpURL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;
  useEffect(() => {
    axios
      .get(httpURL)
      .then((res) => setSimilar(res.data.results))
      .catch((error) => console.log(error));
  }, []);
  return similar;
};

export default useHttpRequest;
