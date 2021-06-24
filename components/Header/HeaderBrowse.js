import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import MoviesContext from "../../store/media-context";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

//styled
const HeaderBroseDiv = styled.li`
  display: none;
  /* position: relative; */
  color: #fff;

  &.showBrowse {
    display: block;
  }
  .dropdown {
    position: absolute;
    top: 150%;
    left: -15%;

    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
    gap: 10px;

    height: 130px;
    width: 150px;

    font-size: 0.7rem;
    border-top: solid 3px #fff;
    font-weight: bold;
    transition: all 2s;
    display: none;
  }

  &:hover .dropdown {
    display: flex;
  }

  .arrowdown-icon {
    position: absolute;
    top: -20%;
    right: -50%;
  }
  .arrowup-icon {
    position: absolute;
    top: -15%;
    right: 50%;

    transform: translateX(50%);
  }

  @media (min-width: 480px) {
    display: block;
    position: relative;
  }
`;

export default function HeaderBrowse(props) {
  const moviesCtx = useContext(MoviesContext);

  return (
    <HeaderBroseDiv className={props.pathname !== "/" && "showBrowse"}>
      <Link href="/">Browse</Link>
      <ArrowDropDownIcon style={{ fontSize: 30 }} className="arrowdown-icon" />
      <div className="dropdown">
        <ArrowDropUpIcon style={{ fontSize: 30 }} className="arrowup-icon" />
        {moviesCtx.links.map((l) => (
          <Link key={l.name} href={l.route}>
            {l.name}
          </Link>
        ))}
      </div>
    </HeaderBroseDiv>
  );
}
