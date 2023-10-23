import React, { useState } from "react";

import "./memo.json";

const RenderMemo = (props) =>{
   
    const [memoContents,setMemo]=useState(props.content);
    const check = () =>{
        setMemo(props.content);
    }
    

    // useEffect(()=>{
        
    // });
    
    return(

        <div className="renderBox" id ="renderBox">
             <div>
                <form className="renderArea">
                    <textarea  className= "memo" defaultValue={memoContents} cols="10" rows = "20" maxLength="200"/>
                </form>
             
             </div>
        </div>
       
       
    );
        
       

  }

export default RenderMemo;