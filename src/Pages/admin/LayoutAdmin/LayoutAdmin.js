import React, { useContext, useEffect, useState } from 'react';
import "./LayoutAdmin.scss";
import Footer from '../../../Components/Template/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import Logout from '../../../Components/Logout/Logout';
import ChangeTitle from '../../../Components/ChangeTitle/ChangeTitle';
import IsLoading from '../../../Components/isLoading/isLoading';
import { Data } from '../../../App';

const LayoutAdmin = (props) => {
    const { data } = useContext(Data);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        console.log("data admin", data)
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [data]);

    return (
        <>
            {isLoading ?
                <IsLoading />
                :
                <div className='LayoutAdmin'>
                    <ChangeTitle Title="Admin" />
                    <div className='container'>
                        <nav>
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive }) => isActive ? "active" : ""}>Home admin</NavLink>
                            <NavLink
                                to="/admin/dashboard/products"
                                className={({ isActive }) => isActive ? "active" : ""}>Product</NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive ? "active" : ""}>login</NavLink>
                        </nav>
                    </div>
                    <div className='container'>
                        <Outlet />
                        <h3>  {data}</h3>
                    </div>
                    <Logout />
                    <Footer />
                </div>
            }

        </>

    );
}
export default LayoutAdmin;