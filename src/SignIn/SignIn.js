import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [error, setError] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);
        if (password !== confirm) {
            setError("password did't match");
            return;
        } else if (password.length < 6) {
            setError("password should be alleast 6 character");
            return;
        }
    }
    return (
        <div>
            <h2>this is SignIn</h2>
            <form onSubmit={handleSubmit}>
                <h1>this is Login</h1>
                <input type="email" name="email" id="" placeholder='enter your email' required />
                <input type="password" name="password" placeholder='password' id="" required />
                <input type="password" name="confirm" placeholder='confirm-password' id="" required />
                <input type="submit" value="Create Account" />
            </form>
            <Link to="/login">already have an account</Link>
            <p>{error}</p>

        </div>
    );
};

export default SignIn;