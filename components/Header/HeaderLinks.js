import Link from "next/link";

import React, { useContext } from "react";
import MoviesContext from "../../store/media-context";

import HeaderBrowse from "./HeaderBrowse";

import styled from "styled-components";

const HeaderLinksDiv = styled.ul`
  display: flex;
  grid-area: E;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px;

  .header-links__home,
  .header-links__newpopular {
    display: none;
  }

  @media (min-width: 480px) {
    justify-content: flex-start;
    padding: 0 20px;

    & > * {
      display: none;
    }
  }

  @media (min-width: 992px) {
  }
`;
export default function HeaderLinks(props) {
  const moviesCtx = useContext(MoviesContext);

  //styled

  const listLinksConditional =
    props.pathname === "/" ? (
      moviesCtx.links.map((l, i) => {
        return (
          <li key={l.class} className={"header-links__" + l.class}>
            <Link href={l.route}>{l.name}</Link>
          </li>
        );
      })
    ) : (
      <li className="header-links__alter">
        <div>{props.routeExactPage}</div>
      </li>
    );
  return (
    <HeaderLinksDiv className="header-links">
      <HeaderBrowse pathname={props.pathname} />
      {listLinksConditional}
    </HeaderLinksDiv>
  );
}
