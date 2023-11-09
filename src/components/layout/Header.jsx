import React from "react";
import { styled } from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <StSpan>여긴 헤더</StSpan>
      <StSpan>여긴 헤더</StSpan>
      <StSpan>여긴 헤더</StSpan>
      <StSpan>여긴 헤더</StSpan>
      <StSpan>여긴 헤더</StSpan>
    </StHeader>
  );
}

const StHeader = styled.header`
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const StSpan = styled.span``;
