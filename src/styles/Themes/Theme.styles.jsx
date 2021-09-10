import { ThemeProvider } from "styled-components";
import theme from "./Theme.utils";
import React from 'react';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
