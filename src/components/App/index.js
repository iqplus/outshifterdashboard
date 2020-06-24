import React from 'react';
import {BrowserRouter as Router,
        Route,} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';


function App(){
    return <Router>
            <div>
                <Navigation />
                 <Route exact path ={ROUTES.LANDING} component={LandingPage} />
                 <Route path = {ROUTES.SIGN_IN} component={SignInPage} />
                 <Route path = {ROUTES.ADMIN} component={AdminPage} />
            </div>
            
        </Router>
}
 
export default App;