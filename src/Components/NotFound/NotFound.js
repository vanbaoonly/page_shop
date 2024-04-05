import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../isLoading/isLoading';
import { ROUTERS } from '../../Router/router';

function NotFound(props) {
    let Navigate = useNavigate();
    const ToHome = () => {
        let key_login = localStorage.getItem("status_login");
        let test = key_login ? JSON.parse(key_login) : false;
        if (!test) {
            // Navigate(ROUTERS.ACTIONS.LOGIN);
            Navigate(ROUTERS.USER.HOME);

        } else {
            if (test[1] === "user") {
                Navigate(ROUTERS.USER.HOME);
            } else {
                Navigate(ROUTERS.ADMIN.HOME);
            }
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
                    To Home Page
                </button>}
        </div>
    );
}

export default NotFound;