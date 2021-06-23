import { useState, useEffect } from "react";
import axios from "axios";

const useHttpRequest = (media_type, list_type) => {
  const [media, setMedia] = useState([]);
  const httpURL = `https://api.themoviedb.org/3/${media_type}/${list_type}?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;
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

export const useRqSearch = (searchMedia) => {
  const [searchRq, setSearchRq] = useState([]);
  const httpURLSearch = `https://api.themoviedb.org/3/search/movie?query=${searchMedia}&api_key=a737035cefb22acd96f01ffdcf8f4f7b&page=1`;
  useEffect(() => {
    const timingInput = setTimeout(() => {
      axios
        .get(httpURLSearch)
        .then((res) => setSearchRq(res.data.results))
        .catch((error) => {
          setSearchRq([]);
          console.log(error);
        });
    }, 500);
    return () => {
      clearInterval(timingInput);
    };
  }, [searchMedia]);
  return searchRq;
};

export default useHttpRequest;
