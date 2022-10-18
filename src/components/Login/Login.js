import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form>
                <h1>this is Login</h1>
                <input type="email" name="email" id="" placeholder='enter your email' required />
                <input type="password" name="password" placeholder='password' id="" required />
                <input type="submit" value="Login" />
            </form>
            <Link to="/signIn">create a new account</Link>

        </div>
    );
};

export default Login;