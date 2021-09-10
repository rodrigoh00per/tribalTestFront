import styled from "styled-components";
export const ContainerLoading = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.801);
    z-index: 11;
`;
export const ElementLoading = styled.div(({
  theme: {
    responsive: { breakpoints, up },
  },
}) => `
    position: absolute;
    left: 43%;
    top: 40%;
    ${up(breakpoints.sm)}{
        left:50%;
    }
`);