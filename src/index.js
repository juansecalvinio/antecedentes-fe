import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { persistor, store } from './store/Store';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ApplicationRoutes from './routes/Routes';
import AppRoute from './routes/AppRoute';
import App from './container/App';
import Main from './container/Main';
import { createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import Spinner from './components/Spinner/SpinnerContainer';
import './config/AxiosConfig';

const history = createBrowserHistory();

const { Routes } = ApplicationRoutes;

const BodyComponent = ({ location: { pathName } }) => {
    const [extraPropsHeader, setExtraPropsHeader] = useState({ counter: null });

    return (
        <Switch>
            <Main>
            {Routes.map((route, key) => 
                <AppRoute {...route} extraPropsHeader={setExtraPropsHeader} key={key} routes={Routes} 
                />
            )}
            </Main>
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
            <BrowserRouter history={history} basename="/">
                <GlobalStyle />
                <Spinner />
                <App>
                    <Body key="body" />
                </App>
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();