import { useState, useEffect } from "react";
import axios from "axios";

const useRqTrending = (media_type) => {
  const [media, setMedia] = useState([]);

  const httpURL = `https://api.themoviedb.org/3/trending/${media_type}/day?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;
  console.log(httpURL);
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

export default useRqTrending;
