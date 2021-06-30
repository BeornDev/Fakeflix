import { useState, useEffect } from "react";
import axios from "axios";

const useRequestMedia = ({
  media_type = "movie",
  list_type = "upcoming",
  time_window = "day",
} = {}) => {
  const [media, setMedia] = useState(null);
  const [error, setError] = useState(null);

  const URL_Request =
    list_type === "trending"
      ? `https://api.themoviedb.org/3/${list_type}/${media_type}/${time_window}?api_key=${process.env.SECRET_KEY}`
      : `https://api.themoviedb.org/3/${media_type}/${list_type}?api_key=${process.env.SECRET_KEY}`;

  useEffect(() => {
    axios
      .get(URL_Request)
      .then((res) => {
        setMedia(res.data.results);
      })
      .catch((err) => setError(err.mesage));
  }, []);

  return { media, error };
};

export default useRequestMedia;
