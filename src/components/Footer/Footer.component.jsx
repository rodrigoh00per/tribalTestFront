import React from "react";
import { useTranslation } from "react-i18next";
import { ContainerFooterOpts } from "./Footer.styles";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <ContainerFooterOpts>
      <label>Legal</label>
      <label>{t("faq")}</label>
      <label>{t("support")}</label>
    </ContainerFooterOpts>
  );
};

export default Footer;
