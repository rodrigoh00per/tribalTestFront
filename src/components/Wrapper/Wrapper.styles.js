import styled from "styled-components";
export const WrapperStyled = styled.div(
  ({
    theme: {
      responsive: { up, breakpoints },
      common: { backgroundColor }
    },
  }) => `
  width: 100%;
  height: 100%;
  overflow-y:hidden;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: minmax(50px, 10%) minmax(100px, 85%); minmax(50px, 5%);
  background-color:${backgroundColor};
  ${up(breakpoints.md)}{
    grid-template-columns:20% 80%;
  }
`);

export const ContainerHeader = styled.header`
  grid-row: 1;
  grid-column: 1 / 3;
`;

export const ContainerNav = styled.aside`
  grid-row:  2;
  grid-column: 1 / 2;
`;

export const ContainerElements = styled.section(
  ({
    theme: {
      responsive: { up, breakpoints },
    },
  }) => `
  grid-row:  2;
  grid-column: 1 / 3;

  ${up(breakpoints.md)}{
    grid-column: 2/3;
  }
`
);
export const ContainerFooter = styled.footer`
  grid-row:  3;
  grid-column: 1/3;
  `;
