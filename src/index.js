import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

import * as ROUTES from './constants/routes';
import SignInPage from './components/SignIn';
import AdminPage from './components/Admin';
import Header from  './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';



class App extends Component {

  render () {

    return (
      //<Provider>
        <BrowserRouter>
          <Switch>
            <Layout>
                <Header />
                <Route exact path = {ROUTES.SIGN_IN} component={SignInPage} />
                <Route path = {ROUTES.ADMIN} component={AdminPage} />
                <SignInPage />
            </Layout>
          </Switch>
        </BrowserRouter>
      //</Provider>
    )
  }
}
                  
ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
