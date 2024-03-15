import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../isLoading/isLoading';

function NotFound(props) {
    let Navigate = useNavigate();
    const ToHome = () => {
        let key_login = localStorage.getItem("status_login");
        let test = JSON.parse(key_login)
        if (test.length > 0) {
            if (test[1] === "user") {
                Navigate("/user");
            } else {
                Navigate("/admin/dashboard");
            }
        }
        else {
            Navigate("/login");
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
        <div>
            {isLoading ?
                <IsLoading /> :
                <button onClick={() => ToHome()}>
                    to Home Page
                </button>}
        </div>
    );
}

export default NotFound;