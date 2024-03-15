import React from 'react';
import "./style.scss"
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/logo/logo192.png";


function Header(props) {
    return (
        <div className='container'>
            <header >
                <img className="logo" src={Logo} alt='logo' />
                <nav>
                    <NavLink
                        to="/user/home"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                    <NavLink
                        to="/user/product"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Product</NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>login</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header;