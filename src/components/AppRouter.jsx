import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import Loader from "../components/UI/loader/Loader"
import Login from "../pages/Login"
import Posts from "../pages/Posts"
import { AuthContext } from '../context';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth 
            ? 
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        exact={route.exact} 
                        element={<route.component />}     
                    />
                )}
                <Route path="*" to="/posts" element={<Posts />} />

            </Routes>
            :
            <Routes>
            {publicRoutes.map(route => 
                <Route 
                    key={route.path} 
                    path={route.path} 
                    exact={route.exact} 
                    element={<route.component />}     
                />
            )}
            <Route path="*" to="/login" element={<Login />} />
        </Routes>
    )
}
export default AppRouter;