import React, { useContext, useState } from 'react';
import "./style.scss"
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../Assets/logo/logo_fu.png";
import Logout from "../../Components/Logout/Logout"
import { AiOutlineDoubleLeft, AiOutlineLogin, AiOutlineMenu, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { Data } from '../../App';
import { ROUTERS } from '../../Router/router';
function Header(props) {
    const { data } = useContext(Data);
    const [setting, Showsetting] = useState(false);
    const [sidebar, setsidebar] = useState(false);

    const menu = [
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Của Hàng",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Sản Phẩm",
            path: ROUTERS.USER.PRODUCTS,

        },
        {
            name: "Bài Viết",
            path: ROUTERS.USER.POSTS
        },
        {
            name: "Liên Hệ",
            path: ROUTERS.USER.CONTACT
        }
    ];
    return (
        <div className='container'>
            <header className='header'>
                {/* <div className='header_left'>
                    <img className="logo" src={Logo} alt='logo' />
                </div>
                <ul className='header_center'>
                    <li>
                        <NavLink
                            to=""
                            className={(Active) => Active.isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={(Active) => Active.isActive ? "active" : ""}>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={(Active) => Active.isActive ? "active" : ""}>
                            contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/product"
                            className={(Active) => Active.isActive ? "active" : ""}>
                            Product
                        </NavLink>
                    </li>

                </ul>
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
                            <li><button style={{ width: "100%", padding: "5px 0px" }}><Logout /></button></li>
                        </ul>
                    }

                </div> */}
                <div className='row'>
                    <div className='header_left col-3 col-lg-2 col-md-10  '>
                        {/* <img className='logo' src={Logo} alt='logo' />
                         */}
                        <h1>LOGO</h1>
                    </div>
                    <ul className='header_center col-6 col-lg-8  ' >
                        {renderMenu(menu)}
                    </ul>
                    <div className='header_right col-3 col-lg-2 '>
                        <div className='tologin'> <Link to={"/login"}><AiOutlineLogin /><span>Đăng Nhập</span></Link></div>
                    </div>
                    <div className='header_menu col-lg-3 col-md-2 '> <span onClick={() => setsidebar(!sidebar)} > <AiOutlineMenu />

                    </span></div>
                </div>
                {
                    sidebar &&
                    <div className='sidebar'>
                        <ul className={sidebar ? "show" : ""}>
                            <div className='close' onClick={() => setsidebar(false)}> <AiOutlineDoubleLeft /></div>
                            {renderMenu(menu)}
                            <div className='tologin ' > <Link className='bdr-none' to={'/login'}><AiOutlineLogin /><span>Đăng Nhập</span></Link></div>
                        </ul>
                    </div>
                }

            </header>

        </div>

    );
}
function renderMenu(menu) {
    return menu.map((item, key) => (
        <li key={key + 1}>
            <NavLink className={(Acive) => Acive.isActive ? "active" : ""} to={item.path}>{item.name}</NavLink>
        </li>
    ));
}

export default Header;