import React from "react";
import styled from "styled-components";
import Link from "next/link";

//Material icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

//styled
const HeaderBroseDiv = styled.li`
  display: none;
  color: #fff;

  &.showBrowse {
    display: block;
  }

  .list-dropfdown-browse {
    position: absolute;
    top: 150%;
    left: -15%;
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

  &:hover .list-dropfdown-browse {
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

  @media (min-width: 768px) {
    display: block;
    position: relative;
  }
  @media (min-width: 992px) {
    display: none;

    &.showBrowse {
      display: none;
    }
  }
`;

export default function HeaderBrowse(props) {
  // console.log("Header Browse");
  return (
    <HeaderBroseDiv className={props.pathname !== "/" && "showBrowse"}>
      <Link href="/">Browse</Link>
      <ArrowDropDownIcon style={{ fontSize: 30 }} className="arrowdown-icon" />
      <div className="list-dropfdown-browse">
        <ArrowDropUpIcon style={{ fontSize: 30 }} className="arrowup-icon" />
        {props.linksHeader.map((l) => (
          <Link key={l.name} href={l.route}>
            {l.name}
          </Link>
        ))}
      </div>
    </HeaderBroseDiv>
  );
}
