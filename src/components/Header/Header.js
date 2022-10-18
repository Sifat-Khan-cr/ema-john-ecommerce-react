import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Contexts/userContext';
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signIn">Sign-In</Link>
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;