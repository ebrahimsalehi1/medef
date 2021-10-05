import React from 'react';
import {BrowserRouter , Switch,Route} from 'react-router-dom';

//import Login from '../Components/Authentication/Login';
import MyAnimate from '../Components/Animation/MyAnimate';
import Test2 from '../Components/Animation/Test2';
import Test3 from '../Components/Animation/Test3';
import App from '../App';
import Add from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Boot1 from '../Components/Bootsrtap/Boot1';
import SliderComp from '../Components/Slider';
import Home from '../Components/Manoyar/Home';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import {red,grey,blue} from '@material-ui/core/colors';
import User from '../Components/Manoyar/User';

const Login = React.lazy(()=>import('../Components/Manoyar/Security/Login'));


const SampleComp = ()=>(<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Edit style={{cursor: 'pointer',color: blue[900]}}/>
                            <Delete style={{cursor: 'pointer',color: blue[900]}}/>
                    </div>)

const typ = {
    loadApp:1,
    loadHome:2
}

const whichTypShow = typ.loadHome;

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
                
                <Route path="/bootstrap">
                    <Boot1 />        
                </Route>

                <Route path='/slider'>
                    <SliderComp/>
                </Route>

                <Route path='/test'>
                    <User/>                    
                </Route>                   

                <Route path="/">
                    {
                        typ.loadApp==whichTypShow && <App/>
                    }
                    {
                        typ.loadHome==whichTypShow && <Home/>
                    }
                </Route>
            </Switch>
        </BrowserRouter>
    );
}