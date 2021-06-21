import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//Components
import HeaderArrow from "./HeaderArrow";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";

import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

//DUMMY data links
const DUMMY_LINKS = [
  { name: "Home", route: "/", class: "home" },
  { name: "TV Shows", route: "/tvshows", class: "tvshows" },
  { name: "Movies", route: "/movies", class: "movies" },
  { name: "New & Popular", route: "/NewPopular", class: "newpopular" },
  { name: "My List", route: "/MyList", class: "mylist" },
];

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
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export default function Header(props) {
  const [scroll, setScroll] = useState(false); //scroll change
  const [showSearch, setshowSearch] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const chageColor = () => {
      if (window.scrollY <= 80) {
        setScroll(false);
      } else setScroll(true);
    };
    window.addEventListener("scroll", chageColor);
  }, [pathname]);

  const searchingMb = () => {
    props.onClick();
  };
  const searchingWS = () => {
    setshowSearch((prevState) => !prevState);
    console.log(showSearch);
  };

  const routeExactPage = DUMMY_LINKS.find((l) => l.route === pathname).name;

  //TODO: Miss 'active' functionality
  return (
    <HeaderDiv className={scroll && "scrolled"}>
      <HeaderArrow pathname={pathname} routeExactPage={routeExactPage} />
      <HeaderLinks pathname={pathname} routeExactPage={routeExactPage} />
      <HeaderIcons />
    </HeaderDiv>
  );
}
