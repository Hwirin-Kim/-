import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Content from "../components/detail/Content";

export default function Detail() {
  const navigation = useNavigate();
  const onClickHandler = () => {
    navigation(-1);
  };
  return (
    <StContainer>
      <StBack onClick={onClickHandler}>🔙뒤로가기</StBack>
      <Content />
    </StContainer>
  );
}

const StContainer = styled.section`
  padding: 10px;
`;

const StBack = styled.p`
  font-size: 20px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
