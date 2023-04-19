import React, { useContext } from 'react';
import { authentication } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {currentUser,isLoading} = useContext(authentication)
    const location = useLocation()

    if(isLoading){
        <p className='mt-24 text-4xl'>Loading......</p>
        return
    }
    if(currentUser){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivetRoute;