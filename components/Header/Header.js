import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ModalSearch from "../Modal/Search/ModalSearch";
import { SearchProvider } from "../../store/search-context";

//Components
import HeaderArrow from "./HeaderArrow";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";

//styles
import styled from "styled-components";

// Styled Components
const HeaderDiv = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  color: #fff;
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 50px 50px;
  grid-template-areas:
    "A B C"
    "E E E";
  transition: 1s all;
  transform: translateY(${(props) => (props.scrolled ? "-50%" : 0)});
  background: ${(props) =>
    props.scrolled
      ? "rgba(0, 0, 0, 0.7)"
      : "linear-gradient(black, transparent)"};

  @media (min-width: 768px) {
    grid-template-columns: 120px auto 40vw;
    grid-template-areas: ${(props) =>
      props.pathname === "/"
        ? `"A B C"
        "E E E"`
        : `"A B C"
      "A E E"`};

    &.scroll-with-menu {
      height: 50px;
      grid-template-rows: 50px;
      transform: translateY(0);
    }
  }
`;

const linksHeader = [
  { name: "Home", route: "/", class: "home" },
  { name: "TV Shows", route: "/tvshows", class: "tvshows" },
  { name: "Movies", route: "/movies", class: "movies" },
  { name: "New & Popular", route: "/NewPopular", class: "newpopular" },
  { name: "My List", route: "/MyList", class: "mylist" },
];

export default function Header() {
  // console.log("Header");
  //TODO: falta modal search wn screen
  //TODO: Miss 'active' functionality on links
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useRouter();
  const routeExactPage = linksHeader.find((l) => l.route === pathname).name;
  const leaveLinksMenu = scrolled && pathname === "/";

  useEffect(() => {
    const onScroll = (e) => {
      setScrolled(e.target.documentElement.scrollTop > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SearchProvider>
      <ModalSearch title="Top Searches" />
      <HeaderDiv
        scrolled={scrolled}
        scrolledHome={leaveLinksMenu}
        pathname={pathname}
        className={leaveLinksMenu && "scroll-with-menu"}
      >
        <HeaderArrow pathname={pathname} routeExactPage={routeExactPage} />
        <HeaderLinks
          pathname={pathname}
          routeExactPage={routeExactPage}
          linksHeader={linksHeader}
        />
        <HeaderIcons />
      </HeaderDiv>
    </SearchProvider>
  );
}
