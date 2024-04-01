import React, { useContext, useEffect, useState } from 'react';
import "./LayoutUser.scss";
import Header from '../../../Components/Template/Header';
import Footer from '../../../Components/Template/Footer';
import { Outlet } from 'react-router-dom';
import Logout from '../../../Components/Logout/Logout';
import ChangeTitle from '../../../Components/ChangeTitle/ChangeTitle';
import IsLoading from '../../../Components/isLoading/isLoading';
import { Data } from '../../../App';

const LayoutUser = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { data } = useContext(Data);

    useEffect(() => {
        // console.log("data user", data)
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading ?
                <IsLoading />
                :
                <div className='LayoutUser'>
                    <ChangeTitle Title={"User"} />
                    <div>
                        <Header />
                        <div className='container'>
                            <Outlet />
                            <h3>  {data.gmail}</h3>
                        </div>
                        <Footer />

                    </div>
                </div>
            }
        </>



    );
}

export default LayoutUser;

