import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IsLoading from '../../../Components/isLoading/isLoading';

function Page1(props) {
    let { id } = useParams();
    console.log("pa", id)
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     const timeout = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <>
            {
                isLoading ?
                    <IsLoading />
                    :
                    <div className='container'>
                        Product Pas{id}
                    </div>

            }


        </>
    );
}

export default Page1;