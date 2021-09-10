import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form as FinalForm } from "react-final-form";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Fields from "../../../components/Forms/Fields/Fields.component";
import { selectInitialValuesOfActions } from "../../../redux/root-selectors";
import { CancelButton, SaveButton } from "../../../styles/Buttons.styles";
import {
  ContainerModal,
  ContainerModalElements,
  ModalTitle,
  ContainerFields,
  FormFields,
} from "../../../styles/Common.styles";
import { getRemoveMask } from "../../Forms/Mask.utils";
import { getFieldsDataOfAction } from "./CreateUpdate.utils";

const CreateUpdate = ({
  section = "business",
  action = "create",
  initialValues = {},
  onConfirm = () => {},
  onDismiss = () => {},
}) => {
  const { t } = useTranslation();
  const [fieldsData, setFieldsData] = useState(null);

  useEffect(() => {
    setFieldsData(getFieldsDataOfAction(section));
  }, [section]);

  const onSubmit = (values) => {
    const valuesFormated = getRemoveMask(fieldsData, values);
    onConfirm(valuesFormated);
  };
  return ReactDOM.createPortal(
    <ContainerModal>
      <ContainerModalElements>
        {fieldsData === null ? (
          "Cargando"
        ) : (
          <Fragment>
            <ModalTitle>
              {action === "create" ? t("create") : t("update")} {"\t"}
              {section === "business" ? t("singular_business") : t("person")}
            </ModalTitle>
            <FinalForm
              initialValues={initialValues}
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <FormFields onSubmit={(e) => handleSubmit(e)}>
                  <ContainerFields>
                    <br />
                    <Fields fieldsData={fieldsData} />

                    <div>
                      <SaveButton style={{ marginRight: "10px" }} type="submit">
                        {action === "create" ? t("create") : t("update")}
                      </SaveButton>
                      <CancelButton
                        onClick={(e) => {
                          e.preventDefault();
                          onDismiss();
                        }}
                      >
                        {t("cancel")}
                      </CancelButton>
                    </div>
                  </ContainerFields>
                </FormFields>
              )}
            />
          </Fragment>
        )}
      </ContainerModalElements>
    </ContainerModal>,
    document.querySelector("#createupdate")
  );
  /*   */
};
const mapStateToProps = (state, ownProps) => ({
  initialValues: selectInitialValuesOfActions(
    ownProps.section === undefined ? "business" : ownProps.section,
    ownProps.id,
    ownProps.personId
  )(state),
});
export default connect(mapStateToProps, {})(CreateUpdate);
