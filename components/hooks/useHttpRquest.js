import { useState, useEffect } from "react";
import axios from "axios";

const useHttpRequest = (type) => {
  const [media, setMedia] = useState([]);
  const httpURL = `https://api.themoviedb.org/3/movie/${type}?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;
  useEffect(() => {
    axios
      .get(httpURL)
      .then((res) => {
        setMedia(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return media;
};

export const useHttpRqSimilar = (id) => {
  const [similar, setSimilar] = useState([]);
  const httpURL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;
  useEffect(() => {
    const timingInput = setTimeout(() => {
      axios
        .get(httpURL)
        .then((res) => setSimilar(res.data.results))
        .catch((error) => {
          setSimilar([]);
          console.log(error);
        });
    }, 500);
    return () => {
      clearInterval(timingInput);
    };
  }, [id]);
  return similar;
};

export default useHttpRequest;
