import styled from "styled-components";


export const ContainerElHeader = styled.div(
  ({
    theme: {
      common: { backgroundColor }
    },
  }) => `
  height: 100%;
  width: 100%;
  display:grid;
  grid-template-columns: 90% 10%;
  overflow-x:hidden;
  background-color:${backgroundColor};
`);


export const ContainerLogoAvatar = styled.div`
  height:100%;
  display: flex;
  gridColumn: 1 / 2;
  display: flex;
  align-items: center;
justify-content:space-around;
  width:220px;

  
`;
export const Avatar = styled.div`
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:500;
  font-size:14px;

`;

export const TribalLogo = styled.img`
  width:120px;
  height:30px;
`;

export const ContainerMenuIcon = styled.div(
  ({
    theme: {
      responsive: { up, breakpoints },

    },
  }) => `
  display:flex;
  justify-content:flex-end;
  align-items:center;

  ${up(breakpoints.md)}{
   display:none;
  }
`);

