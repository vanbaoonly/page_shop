import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ShoppingCart = () => {
    const Navigate = useNavigate();


    return (
        <div className='wrapper_shoppingcart' onClick={() => Navigate("/cart/")}>
            <div className='shoppingcart' data-counter={10}>
                <AiOutlineShoppingCart />
            </div>
        </div>
    );
};

export default ShoppingCart;