import React, { useState } from "react";
import { LanguageIcon } from "../../styles/Icons.styles";
import {
  ContainerElementsNav,
  ContainerLayoutNav,
  ElementNav,
  TextElNav,
} from "./Nav.styles";
import { listItemsMenu } from "./Nav.utils";
import { useTranslation } from "react-i18next";

const Nav = ({ show, onShow }) => {
  const [elements] = useState(listItemsMenu);
  const {
    t,
    i18n,
  } = useTranslation();

  const getElementsOfNav = () =>
    elements.map(({ key, icon }, i) => {
      const IconComp = icon;
      return (
        <ElementNav key={`${key}_${i}`}>
          <IconComp />
          <TextElNav>{t(`menu.items.${key}`)}</TextElNav>
        </ElementNav>
      );
    });

  return (
    <ContainerLayoutNav
      show={show}
      onClick={() => {
        if (show) onShow(false);
      }}
    >
      <ContainerElementsNav onClick={(e) => e.stopPropagation()}>
        {getElementsOfNav()}
        <ElementNav
          style={{ marginTop: "auto", alignSelf: "flex-start" }}
          onClick={() => i18n.changeLanguage(i18n.language==="en"?"es":"en")}
        >
          <LanguageIcon />
          <TextElNav>{ t("language")}</TextElNav>
        </ElementNav>
      </ContainerElementsNav>
    </ContainerLayoutNav>
  );
};

export default Nav;
