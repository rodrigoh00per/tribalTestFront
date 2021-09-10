import React, { lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("../../pages/Business/Dashboard/Dashboard.component"));
const Persons = lazy(() => import("../../pages/Business/Persons/Persons.component"));

const NotFoundRouteAuth = () => <Redirect to={`/`} />;

const BusinessRoutes = ({ match }) => (
    <Switch>
        <Route exact path={`${match.path}`} component={Dashboard} />
        <Route exact path={`${match.path}/:id`} component={Persons} />
        <Route component={() => <NotFoundRouteAuth />} />
    </Switch>
);
export default BusinessRoutes;
