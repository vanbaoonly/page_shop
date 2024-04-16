import React, { useContext, useEffect, useState } from 'react';
import "./LayoutUser.scss";
import Header from '../../../Components/Template/Header';
import Footer from '../../../Components/Template/Footer';
import { Link, Outlet } from 'react-router-dom';
import ChangeTitle from '../../../Components/ChangeTitle/ChangeTitle';
import IsLoading from '../../../Components/isLoading/isLoading';
import { Data } from '../../../App';

const LayoutUser = (props) => {
    const { data } = useContext(Data);
    useEffect(() => {

    }, []);

    return (
        <div className='LayoutUser'>
            <div>
                <Header />
                <div className='content ' >
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default LayoutUser;

