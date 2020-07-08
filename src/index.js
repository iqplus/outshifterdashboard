import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

import * as ROUTES from './constants/routes';
import SignInPage from './components/SignIn';
import AdminPage from './components/Admin';
import Header from  './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './modules/store';
import { Layout } from 'antd';

class App extends Component {

  render () {

    const store = configureStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <React.Fragment>
              <Layout>
                  <Header />
                  
                  <Route exact path = {ROUTES.SIGN_IN} component={SignInPage} />
                  <Route path = {ROUTES.ADMIN} component={AdminPage} />
                  <SignInPage />
              </Layout>
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
                  
ReactDOM.render(<App />,
  document.getElementById('root')
);
