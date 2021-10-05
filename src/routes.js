import React from 'react';
import {BrowserRouter , Switch,Route} from 'react-router-dom';
// import Login from './Components/Manoyar/Security/Login';

//const Login2 = React.lazy(()=>import('./Components/Manoyar/Security/Login'))

const routes = [
    {
        exact:true,
        path:'/login',
        component: React.lazy(()=>import('./Components/Manoyar/Security/Login'))
    }
]

export default function Router(){
    return (
        <React.Suspense fallback={<div>Error</div>}>
        <BrowserRouter>
            <Switch>
            {/* <Route path="/login">
                    <Login />
                </Route> */}
            {
                routes.map((route,index)=>{
                    const Component = route.component;

                    return(
                        <Route 
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={props=><Component {...props} />}
                        />)
                }
                        )
            }
                            
            </Switch>
        </BrowserRouter>
        </React.Suspense>
    );
}

