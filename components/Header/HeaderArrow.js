import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "next/link";
import styled from "styled-components";

const HeaderLeftContainer = styled.div`
  grid-area: A;
  display: flex;
  flex-direction: column;
`;

const HeaderArrowDiv = styled.div`
  display: ${(props) => (props.pathname === "/" ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;

  @media (min-width: 768px) {
    height: 50%;
    font-size: 1.5rem;

    .arrow-back-header {
      display: none;
    }
  }
`;
//TODO: como implmentar las imagenes desde mi directorio?
const HeaderLogoDiv = styled.div`
  height: ${(props) => (props.pathname === "/" ? "100%" : "50%")};
  background: url("https://i.ibb.co/cy5Nv1p/F-netflix.png") center/contain
    no-repeat;
  background-size: 20px 30px;

  @media (min-width: 768px) {
    background: url("https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png")
      center/cover no-repeat;
  }
`;

export default function HeaderArrow(props) {
  return (
    <Link href="/">
      <HeaderLeftContainer>
        <HeaderLogoDiv pathname={props.pathname} />
        <HeaderArrowDiv pathname={props.pathname}>
          <ArrowBackIcon
            className="arrow-back-header"
            style={{ fontSize: 30 }}
          />
          <p>{props.routeExactPage}</p>
        </HeaderArrowDiv>
      </HeaderLeftContainer>
    </Link>
  );
}
