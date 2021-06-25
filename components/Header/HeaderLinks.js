import React, { useContext } from "react";
import MediaContext from "../../store/media-context";

import Link from "next/link";
import HeaderBrowse from "./HeaderBrowse";

import styled from "styled-components";

const HeaderLinksList = styled.ul`
  display: flex;
  grid-area: E;
  justify-content: space-around;
  align-items: center;
  gap: 28px;
  padding: 0 40px;

  .screen-list {
    display: none;
  }

  @media (min-width: 768px) {
    grid-area: B;
    justify-content: flex-start;
    padding: 0 20px;

    .mobile-list {
      display: none;
    }
    .header-links__alter {
      display: none;
    }
  }

  @media (min-width: 992px) {
    .screen-list {
      display: block;
    }
  }
`;
export default function HeaderLinks(props) {
  const moviesCtx = useContext(MediaContext);
  return (
    <HeaderLinksList className={props.pathname !== "/" && "no-home-screen"}>
      <HeaderBrowse pathname={props.pathname} />

      {props.pathname !== "/" && (
        <li className="header-links__alter">
          <div>{props.routeExactPage}</div>
        </li>
      )}
      {moviesCtx.links.map((l) => (
        <li
          key={l.class}
          className={`screen-list ${"header-links__" + l.class}`}
        >
          <Link href={l.route}>{l.name}</Link>
        </li>
      ))}
      {props.pathname === "/" &&
        moviesCtx.links.map((l, i) => {
          if (i === 1 || i === 2 || i === 4) {
            return (
              <li
                key={l.class}
                className={`mobile-list ${"header-links__" + l.class}`}
              >
                <Link href={l.route}>{l.name}</Link>
              </li>
            );
          }
        })}
    </HeaderLinksList>
  );
}
