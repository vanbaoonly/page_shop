import React, { createContext, useContext, useEffect, useState } from 'react';
import "./LayoutAdmin.scss";

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import ChangeTitle from '../../../Components/ChangeTitle/ChangeTitle';
import IsLoading from '../../../Components/isLoading/isLoading';
import { useFetch } from '../../../Components/CustomFecth/useFetch';


export const Data_Products = createContext();

const LayoutAdmin = (props) => {
    const Navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const Logoutt = () => {
        localStorage.removeItem("status_login");
        localStorage.removeItem("data_user");
        Navigate("/login");
    }

    const { data: data, Loading, ErrorMes } = useFetch(`http://localhost:1234/api/user/admin`);


    useEffect(() => {
        console.log("data >>", data)
    }, [data])


    return (
        <>
            {Loading ?
                <IsLoading />
                :
                <Data_Products.Provider value={{}}>
                    <div className='LayoutAdmin'>
                        <ChangeTitle Title="Admin" />
                        <div className='container'>

                            <nav>
                                <NavLink
                                    to="/admin"
                                    className={({ isActive }) => isActive ? "active" : ""}>Home admin</NavLink>
                                <NavLink
                                    to="/admin/dashboard "
                                    className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
                                <NavLink
                                    to="/admin/product "
                                    className={({ isActive }) => isActive ? "active" : ""}>Product</NavLink>

                                <button onClick={() => Logoutt()}>Logout</button>
                            </nav>
                        </div>
                        <div className='containet'>
                            <Outlet />
                            <h1> {data.fullname} </h1>
                            <NavLink
                                to="/"
                            >Home user</NavLink>

                        </div>

                    </div>
                </Data_Products.Provider>
            }

        </>

    );
}
export default LayoutAdmin;