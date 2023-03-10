import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (param) => {
    const [response, setResponse] = useState(null); //useState sets a state and a function to update the state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3/'; //url that is loaded on the axios function alongside param

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const result = await axios(param); //param is placed after the baseURL
            setResponse(result.data); //setResponse updates response to be equal to the data object that is pulled on the axios request
            // console.log(response);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(  () => {       //useEffect runs after page renders, similar to componentDidMount but its used in conjuction with useState
        fetchData(param)
    }, []);


    return{
        response, loading, error //returns the values from fetchData
    }
}

export default useAxios