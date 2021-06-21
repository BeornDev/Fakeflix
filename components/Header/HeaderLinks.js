import React from "react";
import Link from "next/link";

import styled from "styled-components";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const DUMMY_LINKS = [
  { name: "Home", route: "/", class: "home" },
  { name: "TV Shows", route: "/tvshows", class: "tvshows" },
  { name: "Movies", route: "/movies", class: "movies" },
  { name: "New & Popular", route: "/NewPopular", class: "newpopular" },
  { name: "My List", route: "/MyList", class: "mylist" },
];

export default function HeaderLinks(props) {
  const HeaderLinksDiv = styled.ul`
    display: flex;
    grid-area: E;
    justify-content: space-around;
    align-items: center;
    transition: 1s all;
    padding: 0 40px;

    .header-links__browse-dropdown {
      position: absolute;
      bottom: -750%;
      right: -160%;
      display: flex;
      flex-direction: column;
      background-color: #000;
      height: 130px;
      width: 150px;
      font-size: 0.7rem;
      align-items: center;
      gap: 10px;
      border-top: solid 3px #fff;
      justify-content: center;
      font-weight: bold;
      transition: all 2s;
      display: none;
    }
    .arrowDown-dorpdown {
      position: absolute;
      height: 30px;
      width: 30px;
      color: #fff;
      top: -20%;
      right: -50%;
    }
    .arrowUp-dorpdown {
      position: absolute;
      height: 30px;
      width: 30px;
      color: #fff;
      top: -15%;
      right: 50%;
      transform: translateX(50%);
    }
    .header-links__browse:hover .header-links__browse-dropdown {
      display: flex;
    }

    .header-links__home,
    .header-links__newpopular {
      display: none;
    }
    .header-links__browse {
      display: ${props.pathname === "/" ? "none" : "block"};
    }

    @media (min-width: 480px) {
      justify-content: flex-start;
      padding: 0 20px;

      & > * {
        display: none;
      }
      .header-links__browse {
        display: block;
        position: relative;
      }
    }
  `;
  const listLinksConditional =
    props.pathname === "/" ? (
      DUMMY_LINKS.map((l, i) => {
        // if (i === 1 || i === 2 || i === 4) {
        return (
          <li key={l.class} className={"header-links__" + l.class}>
            <Link href={l.route}>{l.name}</Link>
          </li>
        );
        // }
      })
    ) : (
      <li className="header-links__alter">
        <div>{props.routeExactPage}</div>
      </li>
    );
  return (
    <HeaderLinksDiv className="header-links">
      <li className="header-links__browse">
        <Link href="/">Browse</Link>
        <ArrowDropDownIcon className="arrowDown-dorpdown" />
        <div className="header-links__browse-dropdown">
          <ArrowDropUpIcon className="arrowUp-dorpdown" />
          {DUMMY_LINKS.map((l) => (
            <Link key={l.name} href={l.route}>
              {l.name}
            </Link>
          ))}
        </div>
      </li>
      {listLinksConditional}
    </HeaderLinksDiv>
  );
}
