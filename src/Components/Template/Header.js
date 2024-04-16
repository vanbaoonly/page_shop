import React, { useContext, useEffect, useState } from 'react';
import "./style.scss"
import { Link, NavLink } from 'react-router-dom';
import { AiFillYoutube, AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLeftCircle, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { Data } from '../../App';
import { ROUTERS } from '../../Router/router';
import { Format_vnd } from "../../Components/Format_vnd/Format_vnd";
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import DivLogin from '../Div_login_out/Div_login';
const Header = (props) => {
    const { data } = useContext(Data);
    const [sidebar, setsidebar] = useState(false);
    const Hidden = (e) => {
        if (e.target.tagName.toLowerCase() === 'ul') {
            return;
        }
        setsidebar(!sidebar);
    };

    const menu = [
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME
        },
        // {
        //     name: "Của Hàng",
        //     path: ROUTERS.USER.HOME
        // },
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
    useEffect(() => {
        console.log(sidebar)
    }, [sidebar])

    return (
        <header className='header' >
            <div className='container'>
                <div className='header_top'>
                    <div className='row'>
                        <ul className=" header_top_left col-8">
                            <li> <AiOutlineMail /> Demo@gmail.com</li>
                            <li>Miễn phí giao hàng trên  {Format_vnd(9999999)} </li>
                        </ul>
                        <ul className="header_top_right col-2">
                            <li>
                                <Link to="https://www.facebook.com/" ><AiOutlineFacebook /></Link>
                            </li>
                            <li>
                                <Link to="#" ><AiOutlineInstagram /></Link>
                            </li>
                            <li>
                                <Link to="#" > <AiFillYoutube /></Link>
                            </li>
                        </ul>
                        <div className='col-2'><DivLogin data={data} /></div>
                    </div>

                </div>
                <div className='row'>
                    <div className='header_left col-3 col-lg-2 col-md-8  col-sm-6'>
                        {/* <img className='logo' src={Logo} alt='logo' />
                         */}
                        <h1>LOGO</h1>
                    </div>
                    <ul className='header_center col-6 col-lg-8' >
                        {
                            menu.map((item, key) => (
                                <li key={key + 1}>
                                    <NavLink onClick={() => setsidebar(false)}
                                        className={(Acive) => Acive.isActive ? "active" : ""} to={item.path}>{item.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='header_right col-3 col-lg-2 col-md-2 col-sm-3'>
                        <ShoppingCart />
                    </div>
                    <div className='header_menu col-lg-3 col-md-2 col-sm-3'>
                        <span onClick={() => setsidebar(!sidebar)} >
                            <AiOutlineMenu />
                        </span></div>
                </div>
            </div>
            {

                <div className={`sidebar ${sidebar ? "visible" : "hidden"} `} onClick={(e) => Hidden(e)}>
                    <ul className={""}>
                        <div className='close' onClick={() => setsidebar(!sidebar)}>  <AiOutlineClose /></div>
                        <li><h2>LOGO</h2></li>
                        <li>
                            <Link to={""}>   {data.gmail}</Link>
                        </li>

                        {
                            menu.map((item, key) => (
                                <li key={key + 1}>
                                    <NavLink onClick={() => setsidebar(!sidebar)}
                                        className={(Acive) => Acive.isActive ? "active" : ""} to={item.path}>{item.name}</NavLink>
                                </li>
                            ))
                        }
                        <DivLogin data={data} type={"tablet"} />
                    </ul>
                </div>
            }
        </header>

    );


}
export default Header;