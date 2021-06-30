import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const ItemListNoInput = styled.li`
  display: grid;
  grid-template-columns: 35% auto 15%;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  gap: 10px;

  .listSearch_item__title {
    font-size: 0.8rem;
  }
  .listSearch_item__icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listSearch_item__icon__border {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`;

const ListItemImageDiv = styled.div`
  width: 100%;

  img {
    border-radius: 5px;
    width: 95%;
  }
`;

export default function ListNoInput(props) {
  return (
    <React.Fragment>
      {props.media?.map((m) => (
        <ItemListNoInput onClick={() => console.log(m)} key={m.id}>
          <ListItemImageDiv>
            <img
              src={
                m.backdrop_path
                  ? `https://image.tmdb.org/t/p/w300${m.backdrop_path}`
                  : `https://wallpapercave.com/wp/wp1935890.jpg`
              }
            />
          </ListItemImageDiv>
          <p className="listSearch_item__title">{m.title}</p>
          <div className="listSearch_item__icon">
            <div className="listSearch_item__icon__border">
              <PlayArrowIcon />
            </div>
          </div>
        </ItemListNoInput>
      ))}
    </React.Fragment>
  );
}
