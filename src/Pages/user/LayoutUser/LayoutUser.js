import React, { createContext, useEffect, useState } from 'react';
import "./LayoutUser.scss";
import Header from '../../../Components/Template/Header';
import Footer from '../../../Components/Template/Footer';
import { Link, Outlet } from 'react-router-dom';

import IsLoading from '../../../Components/isLoading/isLoading';
import { useFetch } from '../../../Components/CustomFecth/useFetch';

export const Data_User = createContext();

const LayoutUser = (props) => {

    let data_user = localStorage.getItem("data_user");
    let id_user = data_user ? JSON.parse(data_user) : false


    const { data: data, Loading, ErrorMes } = useFetch(`http://localhost:1234/api/user/${id_user.id}`);


    return (
        <>
            {
                ErrorMes ?
                    <div className='container'>
                        <h2>Không thể truy cập </h2>
                        <a href='/login'>thử đăng nhập lại</a>
                    </div>
                    : Loading ?
                        <IsLoading />
                        :
                        <Data_User.Provider value={{ data }}>
                            <div className='LayoutUser'>
                                <Header />
                                <div className='content ' >
                                    <Outlet />
                                </div>
                                <Footer />
                            </div>
                        </Data_User.Provider>
            }
        </>
    );
}

export default LayoutUser;

