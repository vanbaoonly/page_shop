import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import ImageProduct from "../../../Assets/Products/product1.webp";
import "./Products.scss";
import { Format_vnd } from '../../../Components/Format_vnd/Format_vnd';
import { useFetch } from '../../../Components/CustomFecth/useFetch';

const Products = () => {
    const Navigate = useNavigate();
    const [TextSearch, setTextSearch] = useState("");
    const [key, setKey] = useState("");
    const { data: products, Loading, ErrorMes } = useFetch(`http://localhost:1234/api/products/${key}`);

    const DelTextSearch = () => {
        setTextSearch("");
    }
    const [iconSearch, seticonSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const handleSunmit = (e) => {
        e.preventDefault();
        alert("submit")
    };
    const Detail_product = (id) => {
        Navigate(`/product/${id}`)

    }
    useEffect(() => {
        TextSearch.length > 0 ? seticonSearch(true) : seticonSearch(false);
        console.log("keyt", key)
    }, [TextSearch, key])
    return (
        <div className='products'>
            <div className='container product_top'>
                <div className='row'>
                    <div className="col-4 col-md-12  ">
                        <div className="menu">
                            <div className="menu_title" onClick={() => setShowMenu(!showMenu)}>
                                <AiOutlineMenu />
                                <span>Danh sách sản phẩm</span>
                            </div>
                            {
                                showMenu &&
                                <ul className={`menu_list ${showMenu ? "" : "hidden"}`}>
                                    <li onClick={() => setKey("")}> Tất cả Sản phẩm </li>
                                    <li onClick={() => setKey("nam")}> Áo Nam </li>
                                    <li onClick={() => setKey("nu")}> Áo Nữ </li>
                                    <li onClick={() => setKey("trecon")}> Trẻ Con </li>
                                    <li>  Sản phẩm 5 </li>
                                </ul>
                            }
                        </div >
                    </div >
                    <div className="col-8 col-md-12  ">
                        <form className="from_search" onSubmit={(e) => handleSunmit(e)} >
                            <div className="input">
                                <input type="text" value={TextSearch} checked={true} onChange={(e) => setTextSearch(e.target.value)} placeholder="Tìm kiếm..." />
                                {
                                    iconSearch &&
                                    <AiOutlineCloseCircle onClick={() => DelTextSearch()} />
                                }
                            </div>
                            <button type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                </div >
            </div >
            <div className='product'>
                <div className='container'>
                    <div className='grid'>
                        {
                            products?.map((item) => (
                                <div className='grid_item' key={item.id} onClick={() => Detail_product(item.id)} >
                                    <img className='img' src={item.image} alt={item.name} />
                                    <div className='name'>{item.name}</div>
                                    <div className='item_bottom'>
                                        <div className='price'>Giá:
                                            <span>{Format_vnd(item.price)}
                                            </span>
                                        </div>
                                        <div className='total'>còn:
                                            <span>{item.total}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Products;