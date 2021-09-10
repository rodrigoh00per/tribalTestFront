import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding:1rem;
`;

export const ElementsHdr = styled.div`
    display: flex;
    justify-content: space-between;
    padding:1rem 0;
    align-items: center;
    color:black;
    flex-wrap:wrap;
`;

export const HeaderTitle = styled.label`
    font-size:1.5rem;
    font-weight:bold;
`;

/* Styled Components for modal elements */

export const ContainerModal = styled.div
    `
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    overflow-y: auto;
    overflow-x:hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
      
`;

export const ContainerModalElements = styled.div(
    ({
        theme: {
            responsive: { up, breakpoints },

        },
    }) => `
    background-color:white;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 29px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    margin:0;
    width:85%;
    min-height:176px;

  ${up(breakpoints.md)} { 
    max-width:452px;
    width:634px;
  }

`);

export const ModalTitle = styled.label`
    text-align: center;
    padding-top: 1rem;
    font-weight: 700;
    color: #000000;
    font-size:18px;
`;

export const FormFields = styled.form`
    width: 100%;
  `;

export const ContainerFields = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100%;
    margin-bottom:20px;
`;