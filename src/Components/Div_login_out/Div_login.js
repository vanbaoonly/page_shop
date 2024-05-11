import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss"
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const DivLogin = ({ data, type }) => {

    const status = data ? true : false;

    let Navigate = useNavigate();
    const Logoutt = () => {
        localStorage.removeItem("status_login");
        localStorage.removeItem("data_user");
        Navigate("/login");
    }

    return (
        <div className='wrapper_login' >
            {status ?
                <div className='div_logout'   >
                    {
                        type === "tablet" ?
                            <div className='out' onClick={() => Logoutt()}>Đăng xuất</div>
                            :
                            <div className='out1'>
                                <span className='out1_span'>
                                    <AiOutlineLogout />
                                    <span> {data.fullname}</span>
                                </span>
                                <ul >
                                    <li   ><Link to={"profile.me"}>Tài khoản của tôi</Link></li>
                                    <li  ><Link to={"feedback"}>Hỗ trợ</Link></li>
                                    <li onClick={() => Logoutt()}>Đăng xuất</li>
                                </ul>
                            </div>
                    }
                </div>
                :
                <div className='div_login'>
                    <Link to={'/login'}><AiOutlineLogin />
                        <span className='hidden'>Đăng Nhập</span>
                    </Link>
                </div>
            }
        </div>

    );
};

export default DivLogin;