import styled, { css } from "styled-components";

export const LoadingDotsContainer = styled.div`
  display: inline;
  text-align: center;
`;
export const dotStyles = css`
  animation: showHideDot 2.5s ease-in-out infinite;
  @keyframes showHideDot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Dot1 = styled.span`
  ${dotStyles}
  animation-delay: 0.2s;
`;

export const Dot2 = styled.span`
  ${dotStyles}
  animation-delay: 0.4s;
`;

export const Dot3 = styled.span`
  ${dotStyles}
  animation-delay: 0.6s;
`;
