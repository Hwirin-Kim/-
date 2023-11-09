import React from "react";
import { styled } from "styled-components";
import Picture from "../components/picture/Picture";

export default function Home() {
  return (
    <StContainer>
      <StText>여기는 오빠뷰 홈페이지</StText>
      <Picture />
    </StContainer>
  );
}

const StContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const StText = styled.p`
  margin: 20px 0;
  font-size: 30px;
`;
