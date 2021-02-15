
import {GET_QUOTES,DELETE_QUOTES,QUOTES_LOADING} from '../actions/types';

const initialState={
    x:{content:"himalay",originator:{name:"me"}}
    ,
    loading:false
    
    
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_QUOTES:
           
            return{
                ...state,
                x:action.payload,
                loading:false
            }
            break    
        case QUOTES_LOADING:
            return{
                ...state,
                loading:true
            }
        default : 
            return state;
    }
}

