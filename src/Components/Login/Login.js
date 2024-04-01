import "./style.scss"
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import axios from "axios";
import ChangeTitle from "../ChangeTitle/ChangeTitle";
import IsLoading from "../isLoading/isLoading";
import { ROUTERS } from "../../Router/router";

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
    const account =
        [
            {
                type: "admin",
                name: "a",
                password: "1",
                gmail: "admin@gmail.com",
                address: "HCM",
                phone: "0123456789",

            }, {
                type: "user",
                name: "u1",
                password: "2",
                gmail: "user1@gmail.com",
                address: "HCM",
                phone: "0123456789",

            },
            {
                type: "user",
                name: "u2",
                password: "2",
                gmail: "user2@gmail.com",
                address: "HCM",
                phone: "0123456789",

            }
        ]
    const handelLogin = async (e) => {
        e.preventDefault();
        try {
            if (name.length > 0 && password.length > 0) {
                let find_ac = account.find((ac) => ac.name.toLowerCase() === name.toLowerCase() && ac.password.toLowerCase() === password.toLowerCase());
                if (find_ac) {
                    if (find_ac.type === "admin") {
                        Navigate("/page-shop/admin/dashboard")
                        localStorage.setItem("status_login", JSON.stringify([true, find_ac.type]));

                    } else {
                        Navigate("/page-shop/user")


                        localStorage.setItem("status_login", JSON.stringify([true, find_ac.type]));
                    }
                    // props.setdata(find_ac);
                    localStorage.setItem("data", JSON.stringify(find_ac))

                } else {
                    localStorage.setItem("status_login", JSON.stringify(false));
                    alert("account or password in correct.")
                }
                // let res_login = await axios.post("http://192.168.10.1:1234/api/login", getVal);
                // let data = res_login.data;
                // if (data.login) {
                //     if (data.data.type === "admin") {
                //         Navigate("/admin/dashboard");
                //         localStorage.setItem("status_login", JSON.stringify([data.login, data.data.type]));
                //     }
                //     if (data.data.type === "user") {
                //         Navigate("/user");
                //         localStorage.setItem("status_login", JSON.stringify([data.login, data.data.type]));
                //     }
                //     props.setdata(data);
                // } else {
                //     localStorage.setItem("status_login", JSON.stringify(data.login));
                //     alert(data.data)
                // }
            } else {
                alert('Acount or Password empty')
            }

        } catch (er) {
            alert(er)
        }
    }
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
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
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Acount.."
                                    autoComplete="acount" />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type={showPass ? "text" : "password"}
                                    name="password"
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
                            <button type="submit">login</button>
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