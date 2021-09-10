import React from "react";
import ReactDOM from "react-dom";
import { CancelButton, DeleteButton } from "../../../styles/Buttons.styles";
import {
  ContainerModal,
  ContainerModalElements,
  ModalTitle,
} from "../.../../../../styles/Common.styles";
import { useTranslation } from "react-i18next";

const Delete = ({
  name = "",
  onDismiss = () => {},
  onConfirm = () => {},
}) => {
  const { t } = useTranslation();

  return ReactDOM.createPortal(
    <ContainerModal>
      <ContainerModalElements>
        <ModalTitle>{t("message_delete", { name })}</ModalTitle>
        <div>
          <DeleteButton
            style={{ marginRight: "10px" }}
            onClick={() => onConfirm()}
          >
             {t("remove")}
          </DeleteButton>
          <CancelButton onClick={() => onDismiss()}>
            {t("cancel")}
          </CancelButton>
        </div>
      </ContainerModalElements>
    </ContainerModal>,
    document.querySelector("#confirm")
  );
};

export default Delete;
