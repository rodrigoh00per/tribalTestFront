import React from "react";
import ReactDOM from "react-dom";
import LoadingDots from "../../LoadingDots/LoadingDots.component";
import { ContainerLoading, ElementLoading } from "./Loading.styles";

const LoadingPortal = () => {
  return ReactDOM.createPortal(
    <ContainerLoading>
      <ElementLoading>
        <LoadingDots color="#adff29" fontSize="100px" />
      </ElementLoading>
    </ContainerLoading>,
    document.querySelector("#loading")
  );
};

export default LoadingPortal;
