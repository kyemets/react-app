import React, {useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import {AuthContext} from '../context/index'


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
                <MyInput 
                    type="text" 
                    name="username"
                    value="root" 
                    placeholder="Login"
                />
                <MyInput 
                    type="password"
                    name="password" 
                    value="root" 
                    placeholder="Password"    
                />
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}
export default Login;