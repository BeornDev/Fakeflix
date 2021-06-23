import React from "react";

import styled from "styled-components";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const SearchListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  .listSearch_item {
    background: rgba(259, 259, 259, 0.2);
    display: grid;
    grid-template-columns: 30% 54% 15%;
    align-items: center;
  }
  .listSearch_item__img {
    width: 100%;
  }
  .listSearch_item__title {
    font-size: 0.8rem;
    text-align: center;
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
  .alertSearch {
    padding: 10px;
  }
  .alert-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .alert-content {
    font-size: 0.8rem;
  }
`;
//TODO: problema con la renderizada de muchos elementos.
export default function SearchList(props) {
  //TODO: Problema se muestr el fondo.
  return (
    <div style={{ scrollBehavior: "smooth", overflow: "scroll" }}>
      <SearchListDiv>
        {props.similarMovies.length > 0 ? (
          props.similarMovies.map((m) => (
            <li
              onClick={() => console.log(m.id)}
              className="listSearch_item"
              key={m.id}
            >
              <img
                className="listSearch_item__img"
                src={`https://image.tmdb.org/t/p/w300${m.backdrop_path}`}
              />{" "}
              <p className="listSearch_item__title">{m.title}</p>
              <div className="listSearch_item__icon">
                <div className="listSearch_item__icon__border">
                  <PlayArrowIcon />
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="alertSearch">
            <p className="alert-title">Oh darn. We don't have that.</p>
            <p className="alert-content">
              Try searching for another movie, show, actor, director, or genre.
            </p>
          </div>
        )}
      </SearchListDiv>
    </div>
  );
}
