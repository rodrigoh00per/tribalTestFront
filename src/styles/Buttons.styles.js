import styled from "styled-components";


export const CreateButton = styled.button(
    ({
        theme: {
            common: { templates: { buttons: { general: generalStyle, create: createStyle } } }
        },
    }) => `
    ${generalStyle}
    ${createStyle}
    `);

export const DeleteButton = styled.button(
    ({
        theme: {
            common: { templates: { buttons: { general: generalStyle, delete: deleteStyle } } }
        },
    }) => `
    ${generalStyle}
    ${deleteStyle}
        `);

export const CancelButton = styled.button(
    ({
        theme: {
            common: { templates: { buttons: { general: generalStyle, cancel: cancelStyle } } }
        },
    }) => `
    ${generalStyle}
    ${cancelStyle}
                `);

export const SaveButton = styled.button(
    ({
        theme: {
            common: { templates: { buttons: { general: generalStyle, save: saveStyle } } }
        },
    }) => `
        ${generalStyle}
        ${saveStyle}
     
                    `);
