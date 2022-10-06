import {useState,useEffect} from 'react';
import axios from 'axios';
const useAxios = (dataUrl) => {
    const [data,setData]=useState([]);
    const [isLoading, setIsLoading]=useState(false)
    const [fetchError, setFetchError]=useState(null)
    useEffect(()=>{
        let isMounted=true;
        const source=axios.CancelToken.source();
        
            const fetchData= async (url) =>{
                setIsLoading(true);
                try{
                    const response=await axios.get(url,{
                        cancelToken:source.token
                    })
                        setData(response.data)
                        setFetchError(null)
                        setIsLoading(false)
                }catch(error) {
                    if(isMounted){
                        setFetchError(error.message)
                        setData([])
                    }
                }
            }

            fetchData(dataUrl)

        },[dataUrl])
    return (
        {data, fetchError, isLoading}
    );
};

export default useAxios;