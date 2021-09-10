import React, { useEffect, useState, useCallback, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import List from "./List/List.component";
import { selectBsListDataFormated } from "../../../redux/root-selectors";
import {
  getBusinessStart,
  updateBusinessStart,
  deleteBusinessStart,
  createBusinessStart,
} from "../../../redux/root-actions";
import { CreateButton } from "../../../styles/Buttons.styles";
import {
  Container,
  ElementsHdr,
  HeaderTitle,
} from "../../../styles/Common.styles";
import Delete from "../../../components/Portals/Delete/Delete.component";
import CreateUpdate from "../../../components/Portals/CreateUpdate/CreateUpdate.component";
import { useTranslation } from "react-i18next";

const Dashboard = ({
  getBusinessStart,
  createBusinessStart,
  updateBusinessStart,
  deleteBusinessStart,
  data,
  history: { push: navigate },
  match: { path },
}) => {
  const { t } = useTranslation();
  const [modalInfo, setModalInfo] = useState({
    type: null,
    values: {},
  });

  useEffect(() => {
    getBusinessStart();
  }, [getBusinessStart]);

  const restartModalInfo = () => setModalInfo({ type: null, values: {} });

  const onClickAction = useCallback(
    (type, id, title) => {
      if (type === "selection") navigate(`${path}/${id}`);
      else setModalInfo({ type, values: { id, name: title } });
    },
    [navigate, path]
  );

  const renderModal = useCallback(() => {
    if (modalInfo.type === "delete")
      return (
        <Delete
          name={modalInfo.values.name}
          onDismiss={() => restartModalInfo()}
          onConfirm={() => {
            deleteBusinessStart(modalInfo.values.id);
            restartModalInfo();
          }}
        />
      );
    if (modalInfo.type === "create" || modalInfo.type === "edit")
      return (
        <CreateUpdate
          {...modalInfo.values}
          section="business"
          action={modalInfo.type}
          onDismiss={() => restartModalInfo()}
          onConfirm={(values) => {
            if (modalInfo.type === "create") createBusinessStart(values.name);
            else updateBusinessStart(values.businessId, values);
            restartModalInfo();
          }}
        />
      );
    else return null;
  }, [
    modalInfo,
    deleteBusinessStart,
    updateBusinessStart,
    createBusinessStart,
  ]);

  return (
    <Fragment>
      {renderModal()}
      <Container>
        <ElementsHdr>
          <HeaderTitle>{t("plural_business")}</HeaderTitle>
          <CreateButton
            onClick={() => setModalInfo({ type: "create", values: {} })}
          >
            {t("create")} {t("singular_business")}
          </CreateButton>
        </ElementsHdr>
        <List data={data} onClickAction={onClickAction} />
      </Container>
    </Fragment>
  );
};
const mapStateToProps = createStructuredSelector({
  data: selectBsListDataFormated,
});

export default connect(mapStateToProps, {
  getBusinessStart,
  createBusinessStart,
  updateBusinessStart,
  deleteBusinessStart,
})(Dashboard);
