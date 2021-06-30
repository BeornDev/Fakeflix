import React from "react";
import styled from "styled-components";

const ListItemImageDiv = styled.div`
  height: 170px;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  img {
    border-radius: 5px;
    height: 100%;
  }
`;

export default function FoundMedia(props) {
  return (
    <React.Fragment>
      {props.media?.map((m) => (
        <ListItemImageDiv>
          <img
            key={m.id}
            src={
              m.poster_path
                ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                : `https://images-na.ssl-images-amazon.com/images/I/61ljrN7zmoL._AC_SL1024_.jpg`
            }
          />
        </ListItemImageDiv>
      ))}
    </React.Fragment>
  );
}
