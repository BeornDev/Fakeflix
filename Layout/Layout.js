import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styled from "styled-components";
const LayoutDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

const Layout = ({ children }) => {
  // console.log("Layout");
  return (
    <LayoutDiv>
      <Header />
      {children}
      <Footer />
    </LayoutDiv>
  );
};

export default Layout;
