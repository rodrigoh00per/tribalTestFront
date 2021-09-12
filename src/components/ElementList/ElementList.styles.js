import styled from "styled-components";

export const ContainerElementList = styled.div(
    ({
        theme: {
            responsive: { up, breakpoints },
        },
    }) => `
    cursor:pointer;
    display: grid;
    border-bottom: 1px solid #EFEEEE;
    grid-template-columns: 40% 40% 20%;
    grid-template-rows: 50%  50%;
    height:60px;
    color:black;

    ${up(breakpoints.md)}{
        grid-template-columns: 47% 47% 6%;
      }
`);

export const TitleList = styled.label(
    ({ subtitle,
        theme: {
            responsive: { up, breakpoints },
        },
    }) => `
    cursor:pointer;
    grid-row:  ${subtitle ? "1" : "1/3"}; 

    grid-column: 1 / 3;
    height:100%;
    display:flex;
    align-items:center;
    font-weight:500;

    ${up(breakpoints.md)}{
        grid-column: 1 / 2;
        grid-row:  1/3;
      }
  
   
`);
export const SubTitleList = styled.label(
    ({
        theme: {
            responsive: { up, breakpoints },
        },
    }) => `
    cursor:pointer;
    grid-row: 2; 
    grid-column: 1 / 3; 
    padding-top: 10px;
    display:flex;
    align-items:center;
    font-weight:400;
    ${up(breakpoints.md)}{
        padding-top: 0;
        grid-row:  1 / 3;
        grid-column: 2 / 3; 
      }
`);


export const ContainerActions = styled.div`
    grid-row: 1 / 3;
    grid-column: 3 / 4;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
`;