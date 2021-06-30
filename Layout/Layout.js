import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MediaProvider } from "../store/media-context";

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
      <MediaProvider>{children}</MediaProvider>
      <Footer />
    </LayoutDiv>
  );
};

export default Layout;
