import React from 'react';
import "./isLoading.scss"
const IsLoading = () => {
    return (
        <div className='isLoading'>
            <div className='load'>
                <span className='load_spin'></span>
            </div>
        </div>
    );
};

export default IsLoading;