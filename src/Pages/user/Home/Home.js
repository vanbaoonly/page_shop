import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../Components/Template/Header';
import Footer from '../../../Components/Template/Footer';
import IsLoading from '../../../Components/isLoading/isLoading';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
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
                <div className='container'>
                    Home
                </div>}
        </>
    );
};

export default Home;