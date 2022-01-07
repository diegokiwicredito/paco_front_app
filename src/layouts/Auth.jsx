import React from 'react';
import { Outlet } from 'react-router';


function AuthLayout(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default AuthLayout;