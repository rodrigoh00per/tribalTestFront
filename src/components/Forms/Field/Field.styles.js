import styled, { css } from "styled-components";
const sizes = {
  full: "100%",
  eighty: "80%",
  medium: "50%",
  thirty: "30%",
  small: "25%",
};

const getCustomSize = (props) => {
  const customSize = props?.size ?? "100%";
  return css`
    width: ${parseInt(customSize)
      ? `${parseInt(customSize)}%`
      : sizes[customSize]};
  `;
};
const getCustomSizeResponsive = (props) => {
  const customSize = props?.responsive ?? "100%";
  return css`
    width: ${parseInt(customSize)
      ? `${parseInt(customSize)}%`
      : sizes[customSize]};
  `;
};

export const ContainerField = styled.div`
padding-bottom:5px;

  ${getCustomSize}
  ${({
    theme: {
      responsive: { up, breakpoints },
    },
  }) => up(breakpoints.md)} 
      {
        ${getCustomSizeResponsive}
      }
    }
`;

export const ContainerLabelField = styled.div`
  text-align: left;
  padding-bottom: 8px;
`;
export const LabelField = styled.label`
  font-weight: bold;
  font-size: 14px;
`;

export const ErrorInput = styled.label`
  color: #fa301e;
  font-size: 12px;
`;

export const ErrorInputBlank = styled.div`
  width: 130px;
  height: 20px;
`;


