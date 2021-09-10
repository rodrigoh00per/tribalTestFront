import React from "react";

import { LoadingDotsContainer, Dot1, Dot2, Dot3 } from "./LoadingDots.styles";

const LoadingDots = ({ color, fontSize }) => {
  const colorDots = {
    color: `${color ? color : "white"}`,
    fontSize: `${fontSize ? fontSize : "32px"}`,
  };

  return (
    <LoadingDotsContainer>
      <Dot1 style={colorDots}>.</Dot1>
      <Dot2 style={colorDots}>.</Dot2>
      <Dot3 style={colorDots}>.</Dot3>
    </LoadingDotsContainer>
  );
};

export default LoadingDots;
