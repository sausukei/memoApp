import React from "react";
import restore from "./restore";


const RenderMemo = (props) =>{
   
    const memoContents = props.content;
    const event=(e)=>{
        console.log("write")
        restore(props.Key,e.target.value,props.index)
    }
    
    return(

        <div className="renderBox" id ="renderBox">
             <div>
                <form className="renderArea">
                    <textarea  className= "memo" cols="10" rows = "20" maxLength="1000" key = {memoContents} defaultValue ={memoContents} onKeyUp ={(e)=>event(e)}/>
                </form>
             
             </div>
        </div>
       
       
    );
        
       

  }

export default RenderMemo;