import styled from "styled-components";


export const ContainerCard = styled.div`
    margin-bottom: 20px;
    width: 304px;
    height: 158px;
    display: grid;
    border: 1px solid #C8C8CC;
    grid-template-columns: 240px 64px;
    grid-template-rows: 79px 79px;
    border-radius: 12px;
`;

export const TextsTopCard = styled.div`
    grid-row: 1;
    grid-column: 1;
    border-bottom: 1px solid #EFEEEE;
    padding: 0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const IconsCard = styled.div`
    grid-row: 1;
    grid-column: 2;
    border-bottom: 1px solid #EFEEEE;
    padding-top: 10px;
`;

export const TextsBottomCard = styled.div`
    grid-row: 2;
    grid-column: 1 / 3;
    padding:0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const Title = styled.label`
    font-weight: 600; 
    fontSize: 16px;
    color: black;
`;
export const Subtitle = styled.label`
    font-weight: normal;
    font-size: 14px; 
    color: #8D929A; 
`;

export const Phone = styled.label`
    font-weight: 600; 
    font-size: 14px;
    color: black;

`;
export const Email = styled.label`
    font-weight: 600;
    font-size: 14px; 
    color: black;

`;