import React, { useEffect, useState } from 'react';
import IsLoading from '../../../Components/isLoading/isLoading';
import Products from '../Products/Products';
import axios from "axios";
// import { useFetch } from '../../../Components/CustomFecth/useFetch';

const About = () => {
    // const [data, setdata] = useState([]);
    // const get = async () => {
    //     let getdata = await axios.get("http://localhost:1234/api/user");
    //     setdata(getdata.data);
    //     console.log(data)
    // }
    // const { data: data, Loading, ErrorMes } = useFetch("http://localhost:1234/api/user");
    const data = "";
    console.log(data)

    return (

        <div className='container'  >
            about
            {/* {data?.map((item) => (
                <div key={item.id}>{item.fullname + item.email}</div>
            ))} */}
        </div>


    );
};

export default About;