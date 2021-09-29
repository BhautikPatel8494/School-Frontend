import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isLogin(){
    if(sessionStorage.getItem("token")){
        return true
    }else{
        return false
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;