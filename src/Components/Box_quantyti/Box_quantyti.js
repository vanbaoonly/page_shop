import React, { useEffect } from 'react';


const BoxQuantyti = (props) => {
    const { quantity, setQuantity } = props;
    useEffect(() => {
        console.log(quantity)
    }, [quantity])
    return (
        <>
            <button className='reduce' onClick={() => setQuantity((quantity) => quantity === 0 ? quantity = 0 : quantity - 1)}>-</button>
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button className='increase' onClick={() => setQuantity(quantity + 1)}>+</button>
        </>

    );
};

export default BoxQuantyti;