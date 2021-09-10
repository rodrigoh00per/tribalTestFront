import React, { Suspense } from "react";
import Theme from "../styles/Themes/Theme.styles";
import GlobalStyle from "../styles/global.styles";
import { Router } from "react-router-dom";
import Routes from "../routes/Routes";
import history from "../routes/history";
import Wrapper from "./Wrapper/Wrapper.component";
import Loading from "./Portals/Loading/Loading.component";

const App = () => (
  <Theme>
    <GlobalStyle />
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Routes />
        </Wrapper>
      </Suspense>
    </Router>
  </Theme>
);

export default App;
