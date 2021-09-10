import React from "react";
import {
  ContainerField,
  ErrorInput,
  ErrorInputBlank,
  LabelField,
  ContainerLabelField,
} from "./Field.styles";
import InputComponent from "./Input/Input.component";

const Field = ({
  input,
  label,
  type,
  meta,
  placeholder,
  disabled,
  t,
  size,
  responsive,
}) => {
  const renderTypeOfField = () => {
    switch (type) {
      case "text":
      case "email":
      default:
        return (
          <div>
            <InputComponent
              meta={meta}
              input={input}
              autoComplete="off"
              type={type}
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
        );
    }
  };

  const renderError = ({ error, touched }) =>
    touched && error ? <ErrorInput>{error}</ErrorInput> : <ErrorInputBlank />;

  return (
    <ContainerField size={size} responsive={responsive}>
      <ContainerLabelField>
        <LabelField>{t(`forms.${input.name}.label`)}</LabelField>
      </ContainerLabelField>
      {renderTypeOfField()}
      {renderError(meta)}
    </ContainerField>
  );
};

export default React.memo(Field);
