import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../helpers/AuthHelpers';

const AppRoute = (routeProps) => {
    const { component: Component, path, exact, extraPropsHeader, protectedRoute } = routeProps;
    let page = (<Route {...{exact, path}} render={props => <Component {...props} extraPropsHeader={(event) => extraPropsHeader(event)} />} />);

    // Here goes the authentication
    if(protectedRoute) {
        if(getToken('session_token')) {
            return page;
        } else {
            return (
                <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />
            );
        }
    } else {
        return page;
    }

}

export default AppRoute;