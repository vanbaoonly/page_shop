import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ShoppingCart = () => {
    const Navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const chekcart = localStorage.getItem("cart");
    const cart = chekcart ? JSON.parse(chekcart) : false;

    const Link = (url) => {
        return Navigate(url);
    }

    useEffect(() => {
        if (!cart) {
            setTotal(0);
        } else {
            setTotal(cart.length);
        }
        // console.log("total=", cart ? cart.length : 0);
        // console.log("cart=", cart);
    }, [cart]);
    return (
        <div className='wrapper_shoppingcart' onClick={() => Link("/cart/")}>
            <div className='shoppingcart'>
                <AiOutlineShoppingCart />
                <span><h5>{total}</h5> </span>
            </div>
        </div>
    );
};

export default ShoppingCart;