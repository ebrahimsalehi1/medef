import React from 'react';
import {BrowserRouter , Switch,Route} from 'react-router-dom';

import Login from '../Components/Authentication/Login';
import App from '../App';

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}