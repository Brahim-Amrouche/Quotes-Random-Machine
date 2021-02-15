import {GET_QUOTES,DELETE_QUOTES,QUOTES_LOADING} from './types';
import axios from 'axios';


export const getQuotes=()=> dispatch =>{
    dispatch(quotesLoading())
    axios.get("https://quotes15.p.rapidapi.com/quotes/random/",{
    headers:{
        "x-rapidapi-key": "f04d9dcf49mshccc71644e4aaafap119c05jsn50f5af6035d7",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "useQueryString": true
    },
    query:{
        "language_code": "en"
    }
    })
    .then((res)=>{
        return dispatch({
            type:GET_QUOTES,    
            payload:res.data
        })
    })
    .catch((err)=>console.log(err))
    
    
}


export const quotesLoading=()=>{
    return{
        type:QUOTES_LOADING
    }
}