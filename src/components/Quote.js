import React, { Component } from 'react';
import axios from 'axios'
class Quote extends Component{
    constructor(props){
     super(props)
     this.getQuote=this.getQuote.bind(this)
      this.state={
        isLoading:true,
        quote:'',
        author:''
      }
    }
 
 
  getQuote(){
        axios.get('https://api.quotable.io/random')
     .then((res)=>{
         this.setState({
           quote:res.data.content,
           author:res.data.author
         })
        })
     .catch(err=>{
       console.log(err)
     })
       
 };
    
   componentDidMount(){ 
     
    axios.get('https://api.quotable.io/random')
     .then((res)=>{
         this.setState({
           quote:res.data.content,
           author:res.data.author,
           isLoading:false
         })
        })
     .catch(err=>{
       console.log(err)
     })
   
 };
   
       
     
  render(){
       
    
         return(
           <div id="wrapper">
           <div id="quote-box" style={{width:"500px",color:"white",fontFamily:"Raleway,sans-serif",fontSize:"1.25rem",backgroundColor:"#362861",padding:"2rem",borderRadius:"5px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
              { this.state.isLoading?<p style={{textAlign:"center"}}>Loading.....</p>:
                
               <div className="quote-content" style={{display:"flex",flexDirection:"column"}}>
               <cite id="text" style={{lineSpacing:"1px"}} ><q>{this.state.quote}</q></cite>
               <div style={{display:"flex",justifyContent:"flex-end"}}>
                 <p id="author" style={{justifyContent:"flex-end",fontStyle:"italic"}}>-  {this.state.author}</p>
               </div>
               </div>}
             <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
               <div>
               
               <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote}"%0a - ${this.state.author}`} className="fa fa-twitter " id="tweet-quote" target="_top" style={{color:"white",textDecoration:"none",padding:"10px",backgroundColor:"rgb(255 166 166)",borderRadius:"4px",cursor:"pointer"}} ></a>
             </div>
               <div>
               <button onClick={this.getQuote} id="new-quote" style={{backgroundColor:"#ffd8df",color:"#130c0c",padding:"10px",fontFamily:"sans-serif",borderRadius:"4px",fontSize:".8rem",letterSpacing:"1px",cursor:"pointer",outline:"none"}}>NEW QUOTE</button>
               </div>
 
 
            </div>
             
           </div>
             <div id="footer" style={{textAlign:"center",fontFamily:"system-ui"}}>
               <p style={{letterSpacing:".5px",opacity:"0.6"}}>by <cite>muddassir</cite></p>
             </div>
          </div>   
         )
    }
 }
 export default Quote;
 