import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {routes} from "../router";

const AppRouter = () => {

    return (
        <div>
            <Routes>
                {routes.map(route => 
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<route.component />}     
                    />
                )}
            </Routes>
        </div>
    )
}
export default AppRouter;