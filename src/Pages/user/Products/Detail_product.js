import React, { useContext, useEffect, useState } from 'react';
import "./Detail_product.scss";
import { useParams } from 'react-router-dom';
import ImageProduct1 from "../../../Assets/Products/product1.webp";
import ImageProduct2 from "../../../Assets/Products/product2.webp";
import ImageProduct3 from "../../../Assets/Products/product3.webp";
import ImageProduct4 from "../../../Assets/Products/product4.webp";
import { Format_vnd } from '../../../Components/Format_vnd/Format_vnd';
import { useFetch } from '../../../Components/CustomFecth/useFetch';
import IsLoading from '../../../Components/isLoading/isLoading';





const Detail_product = () => {
    const { id } = useParams();
    const { data: product, Loading, ErrorMes } = useFetch(`http://localhost:1234/api/product/${id}`);
    const color = ["Trắng", "Đen", "Xanh", "Xanh đậm", "Da"];
    const size = ["M", "L", "XL", "XXL", "XXXL"];
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const [value, setValue] = useState({
        id: null,
        category_id: null,
        name: null,
        price: null,
        discount: null,
        image: null,
        thumbnail: null,
        description: null,
        total: null,
    })




    const handleColor = (color) => {
        if (selectedColor === color) {
            setSelectedColor('');
        } else {
            setSelectedColor(color);
        }
    };
    const handleSize = (size) => {
        if (selectedSize === size) {
            setSelectedSize('');
        } else {
            setSelectedSize(size);
        }
    };
    const handelAdd_cart = () => {
    }
    const handelBuy = () => {

    }

    const change_image = (src) => {
        setImage(src)
    }
    useEffect(() => {
        if (product) {
            setValue({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                description: product.description,
                total: product.total,
                color: selectedColor,
                size: selectedSize,
                quantity: quantity,
            });

        }

        console.log("va", value)
    }, [product, value, quantity, selectedColor, selectedSize])
    return (
        <>
            {
                Loading ?
                    <IsLoading />
                    :
                    <div className='detail_product'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6 col-md-12'>
                                    <div className='wrapper_image'>
                                        <div className='image_big'>
                                            <img src={product.image} />
                                        </div>
                                        <div className='image_small'>
                                            <img src={ImageProduct1} alt={""} onClick={(e) => change_image(e.target.src)} />
                                            <img src={ImageProduct2} alt={""} onClick={(e) => change_image(e.target.src)} />
                                            <img src={ImageProduct3} alt={""} onClick={(e) => change_image(e.target.src)} />
                                            <img src={ImageProduct4} alt={""} onClick={(e) => change_image(e.target.src)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 col-md-12'>
                                    <div className='wrapper_content'>
                                        <div className='text'>
                                            <div className='name'>{product.name}</div>
                                            <div className='description'>{product.description}</div>
                                            <div className='price'> Giá:  {Format_vnd(product.price)}</div>
                                            <div className='color'>
                                                <p>Màu</p>
                                                <div>
                                                    {
                                                        color?.map((color, key) => (
                                                            <button key={key}
                                                                className={selectedColor === color ? 'selected' : ''}
                                                                onClick={() => handleColor(color)}
                                                            >{color}</button>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                            <div className='size'>
                                                <p>Size</p>
                                                <div>
                                                    {
                                                        size?.map((size, key) => (
                                                            <button key={key}
                                                                className={selectedSize === size ? 'selected' : ''}
                                                                onClick={() => handleSize(size)}
                                                            >{size}</button>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className='quantity'>
                                                <span>số lượng</span>
                                                <button className='reduce' onClick={() => setQuantity((quantity) => quantity === 0 ? quantity = 0 : quantity - 1)}>-</button>
                                                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                                <button className='increase' onClick={() => setQuantity(quantity + 1)}>+</button>
                                                <span className='total'>{product.total} sản phẩm có sẵn. </span>
                                            </div>

                                        </div>
                                        <div className='btn'>
                                            <button onClick={() => handelAdd_cart()} >Thêm giỏ hàng</button>
                                            <button onClick={() => handelBuy()}>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    );
};

export default Detail_product;