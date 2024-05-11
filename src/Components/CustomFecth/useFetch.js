import { useState, useEffect } from "react"; // useState sử dụng để lưu trữ là cập nhật bởi hook
import axios from "axios"; // là thư viện để fecth API

export const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [Loading, setLoading] = useState(true)
    const [ErrorMes, setErrorMes] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1 step

        async function fetchData() {
            // You can await here
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, //<-- 2 step
                });

                let response = res && res.data ? res.data : [];

                setdata((response));
                setLoading(false)
                setErrorMes(false)
            }
            catch (err) {
                if (axios.isCancel(err)) {

                } else {
                    setErrorMes(true)
                    setLoading(false)
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 500);
        return () => {
            ourRequest.cancel('er')
        }
    }, [url])

    return {
        data, Loading, ErrorMes
    }

}

