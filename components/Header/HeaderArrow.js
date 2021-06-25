import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "next/link";
import styled from "styled-components";

const HeaderLeftContainer = styled.div`
  grid-area: A;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  @media (min-width: 768px) {
    .arrow-back-header {
      display: none;
    }
  }
`;
const HeaderArrowDiv = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: transparent;

  @media (min-width: 768px) {
    height: 50%;
    font-size: 1.5rem;
    margin: 0;
  }
`;

const HeaderLogoDiv = styled.div`
  height: 100%;
  background: url("https://i.ibb.co/cy5Nv1p/F-netflix.png") center/contain
    no-repeat;
  background-size: 20px 30px;

  @media (min-width: 768px) {
    height: ${(props) => props.leaveLinksMenu};
    background: url("https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png")
      center/cover no-repeat;
    background-size: 100%;
  }
`;

// const HeaderLogoDiv = styled.div``;

export default function HeaderArrow(props) {
  return (
    <Link href="/">
      <HeaderLeftContainer>
        <HeaderLogoDiv leaveLinksMenu={props.leaveLinksMenu ? "100%" : "50%"} />
        {props.pathname !== "/" && (
          <HeaderArrowDiv>
            <ArrowBackIcon
              className="arrow-back-header"
              style={{ fontSize: 30 }}
            />
            <p>{props.routeExactPage}</p>
          </HeaderArrowDiv>
        )}
      </HeaderLeftContainer>
    </Link>
  );

  // props.pathname === "/" ? (
  //   <HeaderLeftContainer>
  //     <Link href="/">
  //       <React.Fragment>
  //         <HeaderLogoDiv />
  //         <div>sss</div>
  //       </React.Fragment>
  //     </Link>
  //   </HeaderLeftContainer>
  // ) : (
  //   <Link href="/">
  //     <HeaderArrowDiv className="alter">
  //       <ArrowBackIcon style={{ fontSize: 30 }} />
  //       <p>{props.routeExactPage}</p>
  //     </HeaderArrowDiv>
  //   </Link>
  // );
}
