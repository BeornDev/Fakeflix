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

export default useHttpRequest;
