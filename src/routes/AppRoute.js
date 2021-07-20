import React from 'react';
import Cookie from 'universal-cookie';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getToken, getUser, GOOGLE_USER, USER, TOKEN } from '../helpers/AuthHelpers';
import { getGoogleUser } from './../store/actions/loginActions';

const cookie = new Cookie();

const AppRoute = (routeProps) => {
    const { component: Component, path, exact, extraPropsHeader, protectedRoute, googleUser } = routeProps;
    let page = (<Route {...{exact, path}} render={props => <Component {...props} extraPropsHeader={(event) => extraPropsHeader(event)} />} />);

    // Here goes the authentication
    if(protectedRoute) {
        if(getToken() || getUser()) {
            return page;
        } else {
            googleUser()
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
            return (
                <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />
            );
        }
    } else {
        return page;
    }

}

const mapStateToProps = state => {
    return {
        logged: state.loginReducer.logged,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleUser: () => dispatch(getGoogleUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);