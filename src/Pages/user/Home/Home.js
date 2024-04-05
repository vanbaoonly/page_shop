import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../Components/Template/Header';
import Footer from '../../../Components/Template/Footer';
import IsLoading from '../../../Components/isLoading/isLoading';

const Home = () => {

    return (
        <>
            <div className='container'>
                Home
            </div>
        </>
    );
};

export default Home;