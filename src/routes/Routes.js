import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import BusinessRoutes from "./Business/Business.routes";

const Routes = () =>
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/business" />} />
        <Route path="/business" component={BusinessRoutes} />
    </Switch>



export default Routes;