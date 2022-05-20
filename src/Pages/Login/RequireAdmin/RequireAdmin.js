import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [admin,adminLoader] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoader){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAuth;