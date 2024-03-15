import React, { useEffect, useState } from 'react';
import IsLoading from '../../../Components/isLoading/isLoading';

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1000)
    }, [])

    return (
        <> {
            isLoading === false ?
                <IsLoading />
                :
                <div>
                    produucts
                </div>
        }
        </>
    );
};

export default Products;