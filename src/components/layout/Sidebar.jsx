import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const menu_list = [
  { name: "Obbaview", path: "/" },
  { name: "Board", path: "/board" },
];

export default function Sidebar() {
  const navigation = useNavigate();
  const onClickHandler = (path) => {
    navigation(path);
  };
  return (
    <StContainer>
      <StUl>
        {menu_list.map((menu, index) => {
          return (
            <StLi key={index}>
              <StMenu onClick={() => onClickHandler(menu.path)}>
                {menu.name}
              </StMenu>
            </StLi>
          );
        })}
      </StUl>
    </StContainer>
  );
}

const StContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 280px;
  background-color: #1c2536;
  height: 100vh;
  padding: 10px;
`;
const StUl = styled.ul``;
const StLi = styled.li``;
const StMenu = styled.button`
  font-size: 20px;
  color: #d1d1d1;
  margin: 10px 0;
`;
