import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchModal from "./SearchModal";
import { CSSTransition } from "react-transition-group";

import styled from "styled-components";
const LayoutDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

export default function Layout(props) {
  const [show, setShow] = useState(false);
  return (
    <LayoutDiv>
      <Header onClick={() => setShow(true)} />
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={1000}
        classNames="showModal"
      >
        <SearchModal onClose={() => setShow(false)} title={"Top Searches"} />
      </CSSTransition>
      {props.children}
      <Footer />
    </LayoutDiv>
  );
}
