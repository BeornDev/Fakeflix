import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import MoviesContext from "../../store/media-context";

//Components
import HeaderArrow from "./HeaderArrow";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";

import { CSSTransition } from "react-transition-group";
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
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 40px 40px;
  grid-template-areas:
    "A B C"
    "E E E";
  transition: 1s all;

  &.scrolled {
    transform: translateY(-40px);
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media (min-width: 480px) {
    grid-template-columns: 80px auto 120px;
    align-content: center;
    height: 60px;
    grid-template-rows: 40px;
    grid-template-areas: "A E C";

    &.scrolled {
      transform: translateY(0);
    }
  }

  @media (min-width: 992px) {
  }
`;

export default function Header(props) {
  const moviesCtx = useContext(MoviesContext);
  const [showSearch, setshowSearch] = useState(false);

  console.log("Header");
  const router = useRouter();
  const { pathname } = router;

  const searchingMb = () => {
    props.onClick();
  };
  const searchingWS = () => {
    setshowSearch((prevState) => !prevState);
    console.log(showSearch);
  };

  const routeExactPage = moviesCtx.links.find((l) => l.route === pathname).name;

  //TODO: Miss 'active' functionality
  return (
    <HeaderDiv className={moviesCtx.scrolling && "scrolled"}>
      <HeaderArrow pathname={pathname} routeExactPage={routeExactPage} />
      <HeaderLinks pathname={pathname} routeExactPage={routeExactPage} />
      <HeaderIcons />
    </HeaderDiv>
  );
}
