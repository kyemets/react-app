import React, {useContext} from 'react';
import {AuthContext} from '../context/index'
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true'); 
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" name="username" placeholder="Login"/>
                <MyInput type="password" name="password" placeholder="Password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}
export default Login;