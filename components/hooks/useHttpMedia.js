import { useState, useEffect, useContext } from "react";
import MoviesContext from "../../store/media-context";
import axios from "axios";

export const useGenres = () => {
  const mediaCtx = useContext(MoviesContext);
  useEffect(() => {
    mediaCtx.settingLoadState(true);
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
        "https://api.themoviedb.org/3/genre/movie/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
      )
      .then((res) => {
        mediaCtx.settingGenresTv(res.data.genres);
      })
      .catch((error) => console.log(error));
    mediaCtx.settingLoadState(false);
  }, []);
};

// const useHttpMedia = (media_type) => {
//   const { settingLoadState } = useContext(MoviesContext);
//   const [media, setMedia] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const httpURLMedia = `https://api.themoviedb.org/3/trending/${media_type}/day?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;

//   const httpURLGenres =
//     media_type === "all"
//       ? "https://api.themoviedb.org/3/genre/movie/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b"
//       : `https://api.themoviedb.org/3/genre/${media_type}/list?api_key=a737035cefb22acd96f01ffdcf8f4f7b`;

//   useEffect(() => {
//     settingLoadState(true);
//     setTimeout(() => {
//       settingLoadState(false);
//     }, 500);
//     axios
//       .get(httpURLMedia)
//       .then((res) => {
//         setMedia(res.data.results);
//       })
//       .catch((error) => console.log(error));

//     axios
//       .get(httpURLGenres)
//       .then((res) => {
//         setGenres(res.data.genres);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return [media, genres];
// };

// export default useHttpMedia;