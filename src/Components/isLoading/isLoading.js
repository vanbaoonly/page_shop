import React, { useEffect, useState } from 'react';
import "./isLoading.scss"
const IsLoading = () => {
    const [screenHeight, setscreenHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setscreenHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='isLoading' style={{ height: `${screenHeight}px` }}>
            <div className='load'>
                <span className='load_spin'></span>
            </div>
        </div>
    );
};

export default IsLoading;