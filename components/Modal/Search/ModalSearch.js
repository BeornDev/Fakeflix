import { useContext } from "react";

import styled from "styled-components";

import Header from "./Header";
import MediaList from "./SearchList/MediaList";
import SearchContext from "../../../store/search-context";

const ModalDiv = styled.div`
  position: absolute;
  z-index: 12;
  width: 100vw;
  height: 100%;
  /* height: 100vh; */
  display: grid;
  grid-template-rows: 100px auto auto;
  gap: 1rem;
  background: #000;
  color: #fff;
  transform: translateX(${(props) => (props.searching ? "0" : "100%")});
  transition: 1s all;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function SearchModal() {
  const { searching } = useContext(SearchContext);
  return (
    <ModalDiv searching={searching}>
      <Header />
      <MediaList />
    </ModalDiv>
  );
}
