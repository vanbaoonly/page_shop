import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import logo from "../../Assets/logo/logo_ic.png";
function Footer(props) {
    const [email, setEmail] = useState();
    const handleDangKy = (e) => {
        e.preventDefault();
        if (email) {
            alert("ip :" + ipAddress)
            setEmail("")
        } else {
            alert("null")
        }
    }

    const [ipAddress, setIpAddress] = useState('');
    useEffect(() => {

        const fetchIpAddress = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIpAddress(data.ip);
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        };

        fetchIpAddress();
    }, [])
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-md-6  col-sm-6 col-xs-12">
                        {/* <div className='logo'><img src={logo} alt='logo' /></div> */}
                        <div className='logo'><h3>LOGO</h3></div>
                        <ul>
                            <li>Địa chỉ: Số 123, Đường A, Thành phố HCM</li>
                            <li>Số điện thoại: 0123 456 789</li>
                            <li>Email: shop@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-2  col-md-3 col-sm-6 col-xs-12">
                        <h4>Danh mục</h4>
                        <ul>
                            <li>Danh mục 1</li>
                            <li>Danh mục 2</li>
                            <li>Danh mục 3</li>
                            <li>Danh mục 4</li>
                        </ul>
                    </div>
                    <div className="col-2  col-md-3  col-sm-6 col-xs-12">
                        <h4>Chính Sách</h4>
                        <ul  >
                            <li> Hỗ trợ khách hàng </li>
                            <li> Chính sách bảo mật </li>
                            <li> Điều khoản dịch vụ </li>
                        </ul>
                    </div>
                    <div className="col-4  col-md-12 col-sm-6 col-xs-12">
                        <h4>Khuyến mãi & Ưu đãi</h4>
                        <ul>
                            <li>Đăng ký nhận thông tin tại đây.</li>
                            <li>
                                <form onSubmit={handleDangKy}>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email..." />
                                    <button type="submit"  >Đăng ký</button>
                                </form>
                            </li>
                            <div className="icon">
                                <AiFillFacebook color='#4267B2' />
                                <AiOutlineInstagram className='instagram' />
                                <AiFillYoutube color='#FF0000' />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5>&copy; 2024 Tên Công ty. Bản quyền thuộc về Tên Công ty.</h5>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;