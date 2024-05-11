import React, { useContext, useEffect, useState } from 'react';
import IsLoading from '../../../Components/isLoading/isLoading';
import "./Products.scss";
// import { Data_Products } from '../LayoutAdmin/LayoutAdmin';
import { Format_vnd } from '../../../Components/Format_vnd/Format_vnd';
import { useFetch } from '../../../Components/CustomFecth/useFetch';
const Products = () => {
    const { data: products, Loading, ErrorMes } = useFetch(`http://localhost:1234/api/products`);

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className='product'>
            <table>
                <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <th>total</th>
                    <th>actions</th>
                </tr>

                {Loading ?
                    <IsLoading />
                    :
                    products?.map((product) => (
                        <tr key={product.id} >
                            <td className='id'>{product.id}</td>
                            <td> <img className='img' src={product.image} alt={product.name} width={'100px'} height={'100px'} /></td>
                            <td className='name'>{product.name}</td>
                            <td className='description'>{product.description}</td>
                            <td className='price'>{Format_vnd(product.price)}</td>
                            <td className='total'>{product.total}</td>
                            <td>
                                <button>sửa</button>
                                <button>Xóa</button>

                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
};

export default Products;