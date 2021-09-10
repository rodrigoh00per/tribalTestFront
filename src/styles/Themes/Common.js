import { css } from "styled-components";

const Common = {
  fontFamily: "Work Sans",
  fontSize: "1rem",
  backgroundColor: "#fafaf8",
  color: "#6B6E74",

  templates: {
    buttons: {
      general: css`
      border-radius: 5px;
      font-weight:400;
      cursor:pointer;
      border:0;
      outline:none;
      `,

      create: css`
      background-color:black;
      color:white;
      padding:8px;
      min-width:150px;
      `,
      delete: css`
      background-color: #FFD5D5;
      color:#9A0000;
      padding:15px;
      border-radius:20px;
      width:110px;
      `,
      cancel: css`
      background-color: #F8F8F8;
      color:black;
      padding:15px;
      border-radius:20px;
      width:110px;
      `,
      save: css`
      background-color:black;
      color:white;
      padding:15px;
      border-radius:20px;
      width:110px;
      `
    }
  }
};

export { Common };
