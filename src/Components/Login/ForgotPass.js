import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../isLoading/isLoading';

const ForgotPass = () => {
    let Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const SetPass = async () => {
        try {
            if (email.length > 0) {
                let response = await axios.post("http://192.168.10.1:1234/api/forgotpass", { email })
                response.status === 200 ? alert(`Send Successfull to ${email}`) : alert(`Send Failed to ${email}`)
            } else {
                alert("khong de trong")
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
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>

            {
                isLoading ? <IsLoading />
                    :
                    <div className='forgotpass'>
                        <div className="form-send-gmail">
                            <h1>Forgot password</h1>
                            <div className="form-gmail">
                                <label>Email:</label>
                                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email.." />
                            </div>
                            <button onClick={() => SetPass()}>Send</button>
                            <div className="form-bottom">
                                <div className="left">
                                    <span onClick={() => Navigate("/login")}>login</span>

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
};

export default ForgotPass;