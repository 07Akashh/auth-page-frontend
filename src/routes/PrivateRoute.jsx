import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const { user, status } = useSelector((state) => state.auth);

    if (status === 'loading') {
        return <>
            <div class="flex items-center justify-center h-screen">
                <div class="w-16 h-16 border-r-2 border-l-2 border-solid border-r-yellow-600 rounded-full animate-spin border-l-green-700"></div>
            </div>
        </>;
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
