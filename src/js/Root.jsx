import React from 'react';
import {
  BrowserRouter, Switch,
  Route, // Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import configureStore from './store/configureStore';
// import PrivateRoute from './PrivateRoute';
import Login from './containers/loginFe/WelcomeLuc888';
import PrivateRoute from './PrivateRoute';
// import Login from './containers/login/Login';
import Term from './containers/Term';
import Test from './containers/test/Test';
import Policy from './containers/policy/policy';
import Register from './containers/register/Register';
import Guide from './containers/guide/Guide';
import DashBoard from './containers/mainScreen/MainScreen';
// import Login from './containers/loginFe/Login';

import Maintain from './containers/maintain/Maintain';


const AppRoot = styled.div`
  height: 100vh;
  font-family:
    sans-serif,
    "SF Pro JP",
    "SF Pro Display",
    "SF Pro Icons",
    "Helvetica",
    "Arial";
`;

const store = configureStore();

const Root = () => (
  <Provider store={store} key={Math.random()}>
    <BrowserRouter>
      <AppRoot id="root">
        <Switch>
          <Route path="/Register" component={Register} />
          <Route path="/guide" component={Guide} />
          <Route path="/maintain" component={Maintain} />
          <Route path="/test" component={Test} />
          <Route path="/Term" component={Term} />
          <Route path="/policy" component={Policy} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <Route path="/" component={Login} />
        </Switch>
      </AppRoot>
    </BrowserRouter>
  </Provider>
);

export default Root;
