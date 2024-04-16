import React, { useEffect, useState } from 'react';
import "./Cart.scss";
import { Format_vnd } from "../../Components/Format_vnd/Format_vnd"
import Image from "../../Assets/Products/product1.webp";
import Box_quantyti from '../Box_quantyti/Box_quantyti';

const Cart = () => {
    const products = [
        { id: "1", name: "name", image: Image, descrition: "áo polo xịn sò", price: "200", quantity: "09" },
        { id: "2", name: "name", image: Image, descrition: "áo polo xịn sò", price: "200", quantity: "99" },
        { id: "3", name: "name", image: Image, descrition: "áo polo xịn sò", price: "200", quantity: "99" },
        { id: "4", name: "name", image: Image, descrition: "áo polo xịn sò", price: "200", quantity: "99" },
        { id: "5", name: "name", image: Image, descrition: "áo polo xịn sò", price: "200", quantity: "99" },
    ]
    const [quantity, setQuantity] = useState(0);
    const handelSet = (value, id_pro) => {
        console.log('id', id_pro)
        let find_pro = products.find((product) => product.id === id_pro);
        console.log(find_pro)
        if (value === "-") {
            let tam = Number(find_pro.quantity) - 1;
            find_pro.quantity = tam.toString();
            console.log(value, find_pro)
        }
        if (value === "+") {
            let tam = Number(find_pro.quantity) + 1;
            find_pro.quantity = tam.toString();
            console.log(value, find_pro)
        }
        handleQuantity(find_pro.quantity);

    }
    const handleQuantity = (quantity) => {

        console.log("quan tity", quantity);
    }
    useEffect(() => {
        console.log('quantity', quantity)
    }, [quantity])
    return (
        <div className='container cart'>
            <div className='row'>
                <div className='col-3' > <input type='checkbox' />  Sản phẩm</div>
                <div className='col-1'></div>
                <div className='col-2'>Đơn giá</div>
                <div className='col-2'>Số lượng</div>
                <div className='col-2'>Số tiền</div>
                <div className='col-2'>Thao tác</div>
            </div>
            {
                products?.map((product) => (
                    <div className='row' key={product.id}>
                        <div className='col-3' >
                            <input type='checkbox' />
                            <img src={product.image} alt={product.name} />
                            <div style={{ display: "inline" }}>
                                <span>{product.descrition}</span>

                            </div>
                        </div>
                        <div className='col-1'> </div>
                        <div className='col-2'>{Format_vnd(product.price)}</div>
                        <div className='col-2 quantity' >
                            {/* <Box_quantyti quantity={quantity} setQuantity={setQuantity} /> */}
                            <button className='reduce' onClick={(e) => handelSet(e.target.innerText, product.id)}>-</button>
                            <input value={product.quantity} />
                            <button className='increase' onClick={(e) => handelSet(e.target.innerText, product.id)}>+</button>
                        </div>
                        <div className='col-2'>{Format_vnd(product.price)}</div>
                        <div className='col-2'>
                            <div  >
                                <button>sửa</button>
                                <button>Xóa</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Cart;