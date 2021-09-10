import styled, { css } from "styled-components";

const stylesCards = css`
     width: 100%;
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     padding:30px;
     `

export const ContainerList = styled.div(
    ({ showCards = false,
        theme: {
            responsive: { up, breakpoints },
        },
    }) => `
    width:100%;
    ${showCards ? stylesCards : ""}

    ${up(breakpoints.md)}{
       justify-content: ${showCards ? "space-between" : "flex-start"};
      }

`);

