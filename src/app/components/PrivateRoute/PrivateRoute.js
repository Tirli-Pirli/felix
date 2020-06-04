import React from 'react';
import { Route, Redirect, useLocation} from 'react-router-dom';

function PrivateRoute(props) {
    const token = window.localStorage.getItem('token');
    const location = useLocation();

    if(token) {
        console.log('Success');
        return <Route {...props} />
    }
    console.log('Will redirect');

    return  <Redirect to="/login" state={{from: location}} />
    
    
}

export default PrivateRoute