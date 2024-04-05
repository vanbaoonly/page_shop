import React, { useContext, useEffect, useState } from 'react';
import "./LayoutAdmin.scss";
import Footer from '../../../Components/Template/Footer';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Logout from '../../../Components/Logout/Logout';
import ChangeTitle from '../../../Components/ChangeTitle/ChangeTitle';
import IsLoading from '../../../Components/isLoading/isLoading';
import { Data } from '../../../App';
import { toast } from 'react-toastify';

const LayoutAdmin = (props) => {
    const Nav = useNavigate();
    const { data } = useContext(Data);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        console.log("data admin1", data)
        if (data.type === "admin") {
            return;
        } else {
            toast.warning("khong the truy cap")
            return Nav("/")
        }

        return () => clearTimeout(timeout);
    }, [data.type, data]);

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
                            <button><Logout /></button>
                        </nav>
                    </div>
                    <div className='container'>
                        <Outlet />
                        <NavLink
                            to="/"
                        >Home user</NavLink>

                        <h3>  {data.gmail}</h3>
                    </div>

                    <Footer />
                </div>
            }

        </>

    );
}
export default LayoutAdmin;