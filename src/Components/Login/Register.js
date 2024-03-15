import "./style.scss"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import axios from "axios";
import ChangeTitle from "../ChangeTitle/ChangeTitle";
import IsLoading from "../isLoading/isLoading";

const Register = (props) => {
    let Navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const Login = async () => {
        try {
            if (name.length > 0 && password.length > 0) {
                let getVal = {
                    name: name,
                    password: password,
                }
                let res_register = await axios.post("http://192.168.10.1:1234/api/register", getVal);
                let data = res_register.data;
                if (data) {
                    alert(data.status)
                } else {
                    alert(data.status)
                }
            } else {
                alert('Acount or Password empty')
            }

        } catch (er) {
            alert(er)
        }
    }
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {
                isLoading ? <IsLoading /> :
                    <div className='login '>
                        {/* <ChangeTitle Title="Register" /> */}
                        <div className="form">
                            <h1>Register</h1>
                            <div className="form-group">
                                <label>Acount:</label>
                                <input type='text' onChange={(e) => setName(e.target.value)} placeholder="Enter Acount.." />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type={showPass ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password..." />
                                <div className="icons"
                                    onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                            <button onClick={() => Login()}>Register</button>
                            {/* <Logout /> */}
                            <div className="form-bottom">
                                <div className="left">
                                    <span onClick={() => Navigate("/login")}>Log in</span>
                                    |
                                    <span onClick={() => Navigate("/forgotpass")}>Forgot password</span>
                                </div>
                                <div className="right">
                                    <MdLanguage />  <span>English</span>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default Register;