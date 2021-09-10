import React from "react";
import {
  Avatar,
  ContainerElHeader,
  ContainerLogoAvatar,
  ContainerMenuIcon,
  TribalLogo,
} from "./Header.styles";
import tribalImg from "../../styles/images/tribal_logo.png";
import { ArrowDownIcon, MenuIcon } from "../../styles/Icons.styles";
const Header = ({ onShowNav,showNav }) => (
  <ContainerElHeader>
    <ContainerLogoAvatar>
      <TribalLogo src={tribalImg} />
      <Avatar>RG</Avatar>
      <ArrowDownIcon />
    </ContainerLogoAvatar>
    <ContainerMenuIcon>
      <MenuIcon onClick={() => onShowNav(!showNav)} />
    </ContainerMenuIcon>
  </ContainerElHeader>
);

export default Header;
