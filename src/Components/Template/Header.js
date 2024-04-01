import React, { useContext } from 'react';
import "./style.scss"
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/logo/logo192.png";
import Logout from "../../Components/Logout/Logout"
import { Data } from '../../App';
function Header(props) {

    const { data } = useContext(Data);
    return (
        <div className='container'>
            <header >
                <img className="logo" src={Logo} alt='logo' />
                <nav>
                    <NavLink
                        to="/page_shop/user/home"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                    <NavLink
                        to="/page_shop/user/product"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Product</NavLink>
                    <span> {data.name}  <Logout /></span>
                </nav>
            </header>
        </div>
    );
}

export default Header;