import React, { useState, useContext, useCallback } from "react";
import MoviesContext from "../store/movies-context";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchModal from "../components/Modal/Search/Search";
import { CSSTransition } from "react-transition-group";

import styled from "styled-components";
const LayoutDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

const Layout = (props) => {
  //TODO: verificar con callback y memo como ajustar para que no se renderice todo de nuevo cada q cambie un elemento del context
  const { showSearch } = useContext(MoviesContext);
  // console.log("Layout");
  return (
    <LayoutDiv>
      <Header />
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showSearch}
        timeout={500}
        classNames="showModal"
      >
        <SearchModal title={"Top Searches"} />
      </CSSTransition>
      {props.children}
      <Footer />
    </LayoutDiv>
  );
};

export default Layout;
