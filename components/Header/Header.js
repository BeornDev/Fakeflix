import { useRouter } from "next/router";
import { useState, useContext } from "react";
import MoviesContext from "../../store/media-context";

//Components
import HeaderArrow from "./HeaderArrow";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";

import styled from "styled-components";

// Styled Components
const HeaderDiv = styled.div`
  position: fixed;
  z-index: 10; //Always showing
  top: 0;
  right: 0;
  color: #fff;
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 60px auto 80px;
  grid-template-rows: 40px 40px;
  grid-template-areas:
    "A B C"
    "E E E";
  transition: 1s all;
  padding: 0 2vw;
  /* align-content: center; */

  &.scrolled {
    transform: translateY(-40px);
    background-color: rgba(0, 0, 0, 0.7);
  }
  &.scroll-with-menu {
    background-color: rgba(0, 0, 0, 0.7);
    transform: translateY(-40px);
  }
  @media (min-width: 480px) {
    grid-template-columns: 120px auto 100px;
    /* align-content: center; */
    /* height: 80px; */
    /* grid-template-rows: 40px; */
    grid-template-rows: 50px 50px;
    height: 100px;
    grid-template-areas:
      "A B C"
      "A E E";

    &.scrolled {
      transform: translateY(-50px);
    }
    &.scroll-with-menu {
      grid-template-areas: "A B C";
      height: 50px;
      transform: translateY(0);
      /* transform: translateY(-50px); */
      /* height: 50px; */
    }
  }

  @media (min-width: 992px) {
  }
`;

export default function Header(props) {
  //TODO: falta modal search wn screen
  const moviesCtx = useContext(MoviesContext);

  console.log("Header");
  const router = useRouter();
  const { pathname } = router;

  const routeExactPage = moviesCtx.links.find((l) => l.route === pathname).name;

  //TODO: Miss 'active' functionality

  const leaveLinksMenu = moviesCtx.scrolling && pathname === "/";

  return (
    <HeaderDiv
      className={
        leaveLinksMenu ? "scroll-with-menu" : moviesCtx.scrolling && "scrolled"
      }
    >
      {moviesCtx.scrolling && pathname === "/"}
      <HeaderArrow
        leaveLinksMenu={leaveLinksMenu}
        pathname={pathname}
        routeExactPage={routeExactPage}
      />
      <HeaderLinks pathname={pathname} routeExactPage={routeExactPage} />
      <HeaderIcons />
    </HeaderDiv>
  );
}
