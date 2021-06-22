import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "next/link";
import styled from "styled-components";

const HeaderArrowDiv = styled.div`
  grid-area: A;
  background: url("https://i.ibb.co/cy5Nv1p/F-netflix.png") center/contain
    no-repeat;
  background-size: 20px 30px;

  &.alter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background: transparent;
  }

  @media (min-width: 480px) {
    background: url("https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png")
      center/cover no-repeat;
  }
`;

export default function HeaderArrow(props) {
  return props.pathname === "/" ? (
    <Link href="/">
      <HeaderArrowDiv />
    </Link>
  ) : (
    <Link href="/">
      <HeaderArrowDiv className="alter">
        <ArrowBackIcon style={{ fontSize: 30 }} />
        <p>{props.routeExactPage}</p>
      </HeaderArrowDiv>
    </Link>
  );
}
