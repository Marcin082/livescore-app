import React, { useEffect, useState } from 'react';

const useFetch = (action) => {
    const[data,setData] = useState(null)
    const [status, setStatus] = useState('idle');
    const BASE_URL = 'http://api.football-data.org/v2/'
    const Key = '2debb7af66e14f7bb5dab2dd2adfa5e1'
    useEffect(()=>{
        const fetchData = async () => {
            setStatus('fetching');
        
            const response = await fetch(BASE_URL + action, 
                {
                    headers: {  
                    'X-Auth-Token': Key} ,
                });
            const data = await response.json();
            console.log(data)
            setData(data);
            setStatus('fetched');
        }
        fetchData()
    }, [action])
    
    return {data}
};

export default useFetch;