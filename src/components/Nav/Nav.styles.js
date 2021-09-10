import styled from "styled-components";


export const ContainerLayoutNav = styled.div(
    ({ show,
        theme: {
            responsive: { up, breakpoints },

        },
    }) => `
    display:${show ? "block" : "none"};
    width:100%;
    background-color:rgba(0, 0, 0, 0.5);
    position:fixed;
    z-index:10;
    height:90%;

    ${up(breakpoints.md)}{
        display: block;
        position:relative;
        background-color:transparent;
        height:100%;
      }

`);

export const ContainerElementsNav = styled.div(
    ({
        theme: { 
            common: { backgroundColor },
            responsive: { up, breakpoints },
        },
    }) => `
    background-color:${backgroundColor};
    padding-top:1rem;
    height: 100%;
    width: 52%;
    display: flex;
    flex-direction:column;
    align-items:center;


    ${up(breakpoints.md)}{
        position:relative;
        width: 100%;
    }

`);

export const ElementNav = styled.div`
    font-weight:700;
    font-size:14px;
    width:100%;
    height: 50px;
    padding-left:1rem;
    display:flex;
    align-items:center;
    
`;

export const TextElNav = styled.label`
    padding-left: 10px;
    cursor:pointer;
`;