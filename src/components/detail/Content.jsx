import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

export default function Content() {
  const location = useLocation();
  const { title, author, image, date } = location.state;
  return (
    <StContainer>
      <StWrapper>
        <StTitle>{title}</StTitle>
        <StInfoWrapper>
          <StInfo>{`작성자 : ${author}`}</StInfo>
          <StInfo>{date}</StInfo>
        </StInfoWrapper>
      </StWrapper>
      <StImage src={image} alt={title} />
    </StContainer>
  );
}
const StContainer = styled.div`
  width: 800px;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
`;

const StWrapper = styled.div``;
const StTitle = styled.h1`
  font-size: 25px;
`;
const StInfo = styled.p`
  font-size: 15px;
  color: #646464;
`;
const StImage = styled.img`
  width: 100%;
  margin-top: 20px;
`;
const StInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
