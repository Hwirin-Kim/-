import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <StContainer>
      <Sidebar />
      <StBody>
        <Header />
        <Outlet />
      </StBody>
    </StContainer>
  );
}

const StContainer = styled.section`
  width: 100vw;
  display: flex;
`;
const StBody = styled.section`
  margin-left: 280px;
  flex: 1;
`;
