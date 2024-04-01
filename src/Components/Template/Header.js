import React, { useContext, useState } from 'react';
import "./style.scss"
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/logo/logo192.png";
import Logout from "../../Components/Logout/Logout"
import { AiOutlineMenu, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { Data } from '../../App';
function Header(props) {

    const { data } = useContext(Data);

    const [setting, Showsetting] = useState(false);
    return (
        <header >
            <div className='container'>
                <div className='header'>
                    <div className='header_left'>
                        <img className="logo" src={Logo} alt='logo' />
                        <span>Logo</span>
                    </div>
                    <ul className='header_center'>
                        <li>
                            <NavLink
                                to="/page_shop/user/home"
                                className={(Active) => Active.isActive ? "active" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/page_shop/user/about"
                                className={(Active) => Active.isActive ? "active" : ""}>
                                about
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/page_shop/user/contact"
                                className={(Active) => Active.isActive ? "active" : ""}>
                                contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/page_shop/user/product"
                                className={(Active) => Active.isActive ? "active" : ""}>
                                Product
                            </NavLink>
                        </li>

                    </ul>
                    <div className='menu'><AiOutlineMenu /></div>
                    <div className='header_right'>

                        <div className='setting_mode' onClick={() => Showsetting(!setting)}>
                            <span> {data.gmail}</span>
                            <AiOutlineSetting />
                        </div>
                        {
                            setting &&
                            <ul >
                                <li>profile</li>
                                <li>mode</li>
                                <li>abc</li>
                                <li><Logout /></li>
                            </ul>
                        }

                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;