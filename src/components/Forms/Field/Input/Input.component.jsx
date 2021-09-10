import React from "react";
import { InputForm } from "./Input.styles";
const Input = ({ meta, input, type, placeholder, disabled,alignElement,  }) => (
  <InputForm
    meta={meta}
    {...input}
    autoComplete="off"
    type={type}
    disabled={disabled}
    placeholder={placeholder}
    alignElement={alignElement}
  ></InputForm>
);

export default React.memo(Input);