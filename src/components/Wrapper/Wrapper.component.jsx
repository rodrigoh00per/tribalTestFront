import React, { useState } from "react";
import Footer from "../Footer/Footer.component";
import Header from "../Header/Header.component";
import Nav from "../Nav/Nav.component";
import {
  ContainerHeader,
  WrapperStyled,
  ContainerNav,
  ContainerElements,
  ContainerFooter,
} from "./Wrapper.styles";

const Wrapper = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <WrapperStyled>
      <ContainerHeader>
        <Header showNav={showNav} onShowNav={setShowNav} />
      </ContainerHeader>
      <ContainerNav>
        <Nav show={showNav} onShow={(status) => setShowNav(status)} />
      </ContainerNav>

      <ContainerElements>{children}</ContainerElements>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </WrapperStyled>
  );
};

export default Wrapper;
