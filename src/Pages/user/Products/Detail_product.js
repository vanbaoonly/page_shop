import React, { useContext, useEffect, useState } from 'react';
import "./Detail_product.scss";
import { useParams } from 'react-router-dom';
import ImageProduct1 from "../../../Assets/Products/product1.webp";
import ImageProduct2 from "../../../Assets/Products/product2.webp";
import ImageProduct3 from "../../../Assets/Products/product3.webp";
import ImageProduct4 from "../../../Assets/Products/product4.webp";
import { Format_vnd } from '../../../Components/Format_vnd/Format_vnd';
import { toast } from "react-toastify";
import { Data } from '../../../App';
import BoxQuantyti from '../../../Components/Box_quantyti/Box_quantyti';



const Detail_product = () => {
    const { id } = useParams();
    const { cart, setCart } = useContext(Data);
    const products = [
        {
            id: "1",
            name: "name1",
            image: {
                image1: ImageProduct1,
                image2: ImageProduct2,
                image3: ImageProduct3,
                image4: ImageProduct4
            },
            price: "2000000",
            total: "999"
        },
        {
            id: "2",
            name: "name2",
            image: {
                image1: ImageProduct1,
                image2: ImageProduct2,
                image3: ImageProduct3,
                image4: ImageProduct4
            },
            price: "1999999",
            total: "999"
        },

    ]
    const color = ["Trắng", "Đen", "Xanh", "Xanh đậm", "Da"];
    const size = ["M", "L", "XL", "XXL", "XXXL"];
    let product = products.find((product) => product.id === id);
    const [image, setImage] = useState(product.image.image1);
    const [quantity, setQuantity] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [value, setValue] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        color: '',
        size: '',
        quantity: '',
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
        try {

            console.log(value);
            // let arr_localStorage = JSON.parse(localStorage.getItem("cart")) || [];
            // arr_localStorage.push(value);
            // localStorage.setItem("cart", JSON.stringify(arr_localStorage));
            // toast.success("thêm sản phẩm thành công");
        } catch (er) {
            alert(er)
        }
    }
    const handelBuy = () => {

    }

    const change_image = (src) => {
        setImage(src)
    }
    useEffect(() => {
        setValue({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image.image1,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
        })

    }, [quantity, selectedColor, selectedSize])
    return (
        <div className='detail_product'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-md-12'>
                        <div className='wrapper_image'>
                            <div className='image_big'>
                                <img src={image} />
                            </div>
                            <div className='image_small'>
                                <img src={product.image.image1} alt={product.name} onClick={(e) => change_image(e.target.src)} />
                                <img src={product.image.image2} alt={product.name} onClick={(e) => change_image(e.target.src)} />
                                <img src={product.image.image3} alt={product.name} onClick={(e) => change_image(e.target.src)} />
                                <img src={product.image.image4} alt={product.name} onClick={(e) => change_image(e.target.src)} />
                            </div>

                        </div>
                    </div>
                    <div className='col-6 col-md-12'>
                        <div className='wrapper_content'>
                            <div className='text'>
                                <div className='name'>{product.name}</div>
                                <div className='descrition'>Sản phẩm chất lượng cao.</div>
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
                                <button onClick={() => handelAdd_cart(product)} >Thêm giỏ hàng</button>
                                <button onClick={() => handelBuy()}>Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail_product;