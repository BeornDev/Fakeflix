import React from "react";
import styled from "styled-components";

const NoFoundDiv = styled.div`
  padding: 10px;
`;
const NoFoundTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
const NoFoundContent = styled.p`
  font-size: 0.8rem;
`;

export default function NoFound() {
  return (
    <NoFoundDiv>
      <NoFoundTitle>Oh darn. We don't have that.</NoFoundTitle>
      <NoFoundContent className="alert-content">
        Try searching for another movie, show, actor, director, or genre.
      </NoFoundContent>
    </NoFoundDiv>
  );
}
