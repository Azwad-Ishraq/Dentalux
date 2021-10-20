import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {

    const {user,isLoading} = useAuth()


    if(isLoading){
        return <h1 style={{textAlign:'center'}}>Loading.....</h1>
    }
    
    return (
       <Route
       {...rest}
       render={({location})=> user.email ? children : <Redirect
       to={{
           pathname: '/login',
           state : {from: location}
       }}
       ></Redirect>}
       >

       </Route>
    );
};

export default PrivateRoute;