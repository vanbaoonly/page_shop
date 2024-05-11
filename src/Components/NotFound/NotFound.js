import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../isLoading/isLoading';
import { ROUTERS } from '../../Router/router';
// import { Data } from '../../App';


function NotFound(props) {
    // const { data } = useContext(Data);
    let Navigate = useNavigate();
    // const ToHome = (data) => {
    //     if (data.type === "admin") {
    //         return Navigate(ROUTERS.ADMIN.HOME);
    //     }
    //     Navigate(ROUTERS.USER.HOME);
    // }
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);

        }, 500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {isLoading ?
                <IsLoading /> :
                <button onClick={() => Navigate("/")}>
                    To Home Page
                </button>}
        </div>
    );
}

export default NotFound;