import React from 'react';
import {BrowserRouter , Switch,Route} from 'react-router-dom';

import Login from '../Components/Authentication/Login';
import MyAnimate from '../Components/Animation/MyAnimate';
import Test2 from '../Components/Animation/Test2';
import Test3 from '../Components/Animation/Test3';
import App from '../App';
import Add from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/react-spring">
                    {/* <MyAnimate/> */}

                    {/* <div style={{position:'relative'}}>
                    <div style={{position:'absolute',backgroundColor:'blue',left:200,top:200}}>
                    <Test2 >
                        <TextField label="label1" />
                        <Add style={{backgroundColor:'red',cursor:'pointer'}} onClick={()=>{alert('123')}}/>
                    </Test2>
                    </div>
                    </div> */}

                    <Test3/>

                </Route>

                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}