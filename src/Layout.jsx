import { Outlet } from "react-router-dom";
import Navigation from "@/Navigation";
import Header from "@/Header";
import GlobalStyle from "@/GlobalStyle";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex-direction: column;
  }
`;

const Main = styled.main`
  position: fixed;
  height: calc(100% - 186px);
  width: 100%;
  padding: 1em;
  overflow: scroll;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Wrapper>
    </>
  );
};

export default Layout;
