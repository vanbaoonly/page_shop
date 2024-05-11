import "./style.scss"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import axios from "axios";
import ChangeTitle from "../ChangeTitle/ChangeTitle";
import IsLoading from "../isLoading/isLoading";
import { ROUTERS } from "../../Router/router";
import { toast } from "react-toastify";

const Login = (props) => {
    let Navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let getVal = {
        name: name,
        password: password,
    }

    const handelLogin = async (e) => {
        e.preventDefault();
        const { name, password } = getVal;
        if (name.length === 0 || password.length === 0) {
            toast.error('Acount or Password empty')
        }
        try {
            let res_login = await axios.post("http://localhost:1234/api/login", getVal);
            let data = res_login.data;
            if (data.login) {
                if (data.data.type === "admin") {
                    Navigate('/admin/')
                }
                if (data.data.type === "user") {
                    Navigate('/')
                    toast.success('Welcom to Store,' + data.data.name)
                }
                localStorage.setItem("status_login", JSON.stringify(data.login))
                localStorage.setItem("data_user", JSON.stringify(data.data))
            } else {
                toast.error(data.data)
            }

        } catch (er) {
            toast.error("loi")
        }
    }

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <ChangeTitle Title={"login"} />
            {
                isLoading ?
                    <IsLoading />
                    :
                    <div className='login'>
                        <form className="form" onSubmit={handelLogin}>
                            <h1>Log in</h1>
                            <div className="form-group">
                                <label>Acount:</label>
                                <input type='text'
                                    name="acount"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Acount.."
                                    autoFocus={true}
                                    autoComplete="acount" />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type={showPass ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Password..."
                                    autoComplete="current-password"
                                />
                                <div className="icons"
                                    onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                            <button className="btn_submit" type="submit">login</button>
                            <div className="form-bottom">
                                <div className="left">
                                    <span onClick={() => Navigate(ROUTERS.ACTIONS.REGISTER)}>Register</span>
                                    |
                                    <span onClick={() => Navigate(ROUTERS.ACTIONS.FORGOTPASSWPRD)}>Forgot password</span>
                                </div>
                                <div className="right">
                                    <MdLanguage />  <span>English</span>
                                </div>
                            </div>
                        </form>
                    </div>
            }
        </>
    );
}

export default Login;