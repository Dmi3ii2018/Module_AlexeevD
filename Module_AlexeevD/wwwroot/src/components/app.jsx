import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './main.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import { PrivateRoute } from '../common/private-route.jsx';
import { useUserStore } from '../ducks/user/user-hooks';

import 'antd/dist/antd.css';
import '../style.css';

export const App = () => {

  const { isAuthorized } = useUserStore();

  return (
    <BrowserRouter>
      <Layout style={{backgroundColor: "#ffffff"}}>
        <Switch>
          {/* <PrivateRoute
            component={Main}
            isAuthorized={isAuthorized}
            path="/"
            exact
          /> */}
          <Route path="/" exact component={Main} />
          <Route path="/Auth/SignIn" component={SignIn} />
          <Route path="/Auth/SignUp" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
