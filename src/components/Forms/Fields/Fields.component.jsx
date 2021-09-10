import { Field as FieldFinalForm } from "react-final-form";
import React from "react";
import Field from "../Field/Field.component";
import { getValidateFunction } from "../Validations/Validations";
import { getMask } from "../Mask.utils";
import { useTranslation } from "react-i18next";

const Fields = ({ fieldsData }) => {
  const { t } = useTranslation();
  return Object.keys(fieldsData).map((key) => {
    const { required, mask } = fieldsData[key];
    const validate = required ? getValidateFunction(key) : undefined;
    const parse = getMask(mask);
    return (
      <FieldFinalForm
        key={key}
        name={fieldsData[key].name}
        validate={validate}
        parse={parse}
        t={t}
        render={(props) => <Field {...props} {...fieldsData[key]} />}
      />
    );
  });
};

export default Fields;
