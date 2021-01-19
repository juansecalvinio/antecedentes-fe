import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { persistor, store } from './store/Store';
import { Provider } from 'react-redux';
import { Switch, HashRouter, withRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ApplicationRoutes from './routes/Routes';
import AppRoute from './routes/AppRoute';
import App from './container/App';
import { createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";

import Spinner from './components/Spinner/SpinnerContainer';
import './config/AxiosConfig';

const history = createHashHistory();

const { Routes } = ApplicationRoutes;

const BodyComponent = ({ location: { pathName } }) => {
    const [extraPropsHeader, setExtraPropsHeader] = useState({ counter: null });

    return (
        <Switch>
            {Routes.map((route, key) => 
                <AppRoute {...route} extraPropsHeader={setExtraPropsHeader} key={key} routes={Routes} 
                />
            )}
        </Switch>

    )
}

const Body = withRouter(BodyComponent);

const GlobalStyle = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'AileronRegular', sans-serif;
    }
    body {
        background: #FBFBFB !important;
        height: 0 !important;
    }
    html,
    body {
        transition: all .3s ease;
    }
    textarea:focus, button:focus, input:focus {
        outline: none;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <HashRouter history={history} basename="/">
                <GlobalStyle />
                <Spinner />
                <App>
                    <Body key="body" />
                </App>
            </HashRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();