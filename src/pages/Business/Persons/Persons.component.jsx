import React, {
  useMemo,
  useState,
  useEffect,
  Fragment,
  useCallback,
} from "react";
import { connect } from "react-redux";
import {
  selectPropOfSpecificBusiness,
  selectPersonsBsnsDataFormated,
} from "../../../redux/root-selectors";
import {
  Container,
  ElementsHdr,
  HeaderTitle,
} from "../../../styles/Common.styles";

import {
  getPersonsStart,
  createPersonStart,
  deletePersonStart,
  updatePersonStart,
} from "../../../redux/root-actions";
import { CreateButton } from "../../../styles/Buttons.styles";
import List from "./List/List.component";
import { BackIcon, OverViewIcon } from "../../../styles/Icons.styles";
import CreateUpdate from "../../../components/Portals/CreateUpdate/CreateUpdate.component";
import Delete from "../../../components/Portals/Delete/Delete.component";
import { useTranslation } from "react-i18next";
const Persons = ({
  match: { params },
  getPersonsStart,
  createPersonStart,
  deletePersonStart,
  updatePersonStart,
  businessName,
  data,
  history: { goBack },
}) => {
  const { t } = useTranslation();
  const [modalInfo, setModalInfo] = useState({
    type: null,
    values: {},
  });
  const [showCards, setShowCards] = useState(false);

  const businessId = useMemo(() => (params?.id ? params?.id : null), [params]);

  useEffect(() => {
    getPersonsStart(businessId);
  }, [businessId, getPersonsStart]);

  const restartModalInfo = () => setModalInfo({ type: null, values: {} });
  
  const onClickAction = useCallback((type, personId, title) => {
    if (type === "selection") return;
    else setModalInfo({ type, values: { personId, name: title } });
  }, []);

  const renderModal = useCallback(() => {
    if (modalInfo.type === "create" || modalInfo.type === "edit")
      return (
        <CreateUpdate
          {...modalInfo.values}
          id={businessId}
          section="persons"
          action={modalInfo.type}
          onDismiss={() => restartModalInfo()}
          onConfirm={(values) => {
            if (modalInfo.type === "create")
              createPersonStart(businessId, values);
            else updatePersonStart(businessId, values.personId, values);
            restartModalInfo();
          }}
        />
      );
    else if (modalInfo.type === "delete")
      return (
        <Delete
          name={modalInfo.values.name}
          onDismiss={() => restartModalInfo()}
          onConfirm={() => {
            deletePersonStart(businessId, modalInfo.values.personId);
            restartModalInfo();
          }}
        />
      );
    else return null;
  }, [
    modalInfo,
    businessId,
    createPersonStart,
    deletePersonStart,
    updatePersonStart,
  ]);

  return (
    <Fragment>
      {renderModal()}
      <Container>
        <ElementsHdr>
          <BackIcon onClick={() => goBack()} />
          <HeaderTitle style={{ flex: 2, paddingLeft: "10px" }}>
            {t("singular_business")} {businessName}
          </HeaderTitle>
          <OverViewIcon onClick={() => setShowCards(!showCards)} />
          <div style={{ margin: "0 auto", paddingLeft: "10px" }}>
            <CreateButton
              onClick={() => setModalInfo({ type: "create", values: {} })}
            >
              {t("create")} {t("person")}
            </CreateButton>
          </div>
        </ElementsHdr>
        <List data={data} onClickAction={onClickAction} showCards={showCards} />
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  data: selectPersonsBsnsDataFormated(ownProps.match.params.id)(state),
  businessName: selectPropOfSpecificBusiness(
    ownProps.match.params.id,
    "name"
  )(state),
});
export default connect(mapStateToProps, {
  getPersonsStart,
  createPersonStart,
  deletePersonStart,
  updatePersonStart,
})(Persons);
