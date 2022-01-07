import React from 'react';
import { Outlet } from 'react-router';

function Store(props) {
    return ( 
        <div>
            <Outlet />
        </div>
     );
}

export default Store;