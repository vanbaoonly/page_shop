import React, { useEffect, useState } from 'react';
import IsLoading from '../../../Components/isLoading/isLoading';
import { AiOutlineCloseCircle, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import Slider from "react-slick";
import banner1 from "../../../Assets/Banner/banner1.jpg";
import banner2 from "../../../Assets/Banner/banner2.jpeg";
import banner4 from "../../../Assets/Banner/banner4.jpg";
import Slider_banner from '../../../Components/Slider_banner/Slider_banner';
import { Link } from 'react-router-dom';
import "./Home.scss";


const Home = () => {
    const arr_image = [banner1, banner2, banner4];

    const products = [
        { id: 1, name: 'Sản phẩm 1', price: '$10', image: banner1 },
        { id: 2, name: 'Sản phẩm 2', price: '$15', image: banner2 },
        { id: 3, name: 'Sản phẩm 3', price: '$20', image: banner4 },
    ];

    return (
        <div className='home'>
            <div className='banner container'>
                <Slider_banner arr_image={arr_image} type={"banner"} />
            </div>
            <div className='container'>
                <section className="featured-products">
                    <h2>Sản Phẩm Nổi Bật</h2>
                    <div className="product-list">
                        {products.map(product => (
                            <div key={product.id} className="product-item">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <Link to={"/product"}>Xem thêm</Link>
            </div>

        </div>
    );
};

export default Home;