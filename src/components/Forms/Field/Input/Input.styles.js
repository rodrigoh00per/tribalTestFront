import styled, { css } from "styled-components";

const getErrorInputStyles = (props) => {
  return props.meta.error && props.meta.touched ? invalidInput : "";
};
const invalidInput = css`
  border: 1px solid #fa301e;
  background-color: #fed4d1;
`;

export const styleOfInput = css`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 16px;
  opacity: 1;
  ${getErrorInputStyles}
`;

export const InputForm = styled.input`
text-align: left;
border: ${({ value }) => (value.length === 0 ? "1px solid #a2a2a2" : "0px")};
border-bottom: ${({ value }) =>
  value.length === 0 ? "1px solid #a2a2a2" : "  2px solid #000000"};
background-color:${(props) =>
  typeof props.disabled !== "undefined" && props.disabled === true
    ? "#eee"
    : "#fafaf8"};
  ${styleOfInput}

  ${({
    theme: {
      responsive: { up, breakpoints },
    },
  }) => up(breakpoints.md)} {
    font-size: 18px;
  }}
 
`;
