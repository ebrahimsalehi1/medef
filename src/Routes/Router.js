import React from 'react';
import {BrowserRouter , Switch,Route} from 'react-router-dom';

import Login from '../Components/Authentication/Login';
import MyAnimate from '../Components/Animation/MyAnimate';
import App from '../App';

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/react-spring">
                    <MyAnimate/>
                </Route>

                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}