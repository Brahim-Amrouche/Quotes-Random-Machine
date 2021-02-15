import React , {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getQuotes} from './actions/quoteActions';
import twitter from './sources/twitter.png';
import quotesimage from './sources/quotes.png';
import $ from 'jquery';



function App() {
  const quotes=useSelector(state=>({quote:state.quotes.x , loading:state.quotes.loading}))
  let loading=quotes.loading;
  const dispatch=useDispatch();
 
  useEffect(()=>{
    dispatch(getQuotes());
    
    
    
  
    
   
  }
  ,[])
  
  useEffect(()=>{
    fadeDisplayIn("#text");
    fadeDisplayIn("#normal-quote")
    fadeDisplayIn("#reverse-quote")
    fadeDisplayIn("#author")
    fadeDisplayIn("#tweet-quote")
    $("#twitter-img").show(1200);
    
    
    
   
    
    
  },[quotes.loading]);
  
  const fadeDisplayOut=(selector)=>{
    $(`${selector}`).animate({
      opacity:"0"
    },{duration:800,queue:false})
  }

  
  const fadeDisplayIn=(selector)=>{
    $(`${selector}`).animate({
      opacity:"0"
    },{duration:0,queue:true})
    $(`${selector}`).animate({
      opacity:"1"
    },{duration:1000,queue:true})

  }

  const handleClick=()=>{
    $("#new-quote").animate({
      fontSize:"1vw"
    },800);
    
    fadeDisplayOut("#text");
    fadeDisplayOut("#normal-quote")
    fadeDisplayOut("#reverse-quote")
    fadeDisplayOut("#author")
    fadeDisplayOut("#tweet-quote")
    setTimeout(() => {
      dispatch(getQuotes())
    }, 700);  
   
   
  }
  
  return (
    <div className="App" id="quote-box">
      {display(loading,quotes)}
      <button type="button" id="new-quote" onClick={handleClick}>
        New Quote
      </button>
      
      
      
    </div>
  
  );
}
const shrink=()=>{
  $("#twitter-img").animate({
    width:"2.5vw",
    height:"2.5vw"
  },500)

}
const removeShrink=()=>{
  $("#twitter-img").animate({
    width:"3vw",
    height:"3vw"
  },500)
}

const display=(loading=false , quotes={})=>{
  if(loading){
    return (<div className="content-holder">
      <p id="loading">loading ...</p>
    </div>)
  }else{
    return (
      <div className="content-holder">
        <img src={quotesimage} id="normal-quote" alt="quote"/>
        <div id="text">
          <p>{quotes.quote.content} </p>
        </div>
        <img src={quotesimage} alt="quote" id="reverse-quote"/>
        <div id="author">
          <p>{quotes.quote.originator.name}</p>
        </div>
        <a onMouseEnter={shrink} onMouseLeave={removeShrink} id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${quotes.quote.content}`} >
          <img src={twitter} id="twitter-img" alt='twitter' />
        </a>
      </div>
    )
  }
}

export default App;
