import React, { useState } from "react";

import "./memo.json";

const RenderMemo = (props) =>{
   
    const memoContents = props.content;
    // const check = () =>{
    //     // props.setContent(e.target.v alue)
    //     console.log(memoContents)
    // }
    

    // useEffect(()=>{
        
    // });
    
    return(

        <div className="renderBox" id ="renderBox">
             <div>
                <form className="renderArea">
                    <textarea  className= "memo" cols="10" rows = "20" maxLength="200" key = {memoContents} defaultValue ={memoContents}/>
                </form>
                {/* <h1 onClick={()=>check()}>
                    {memoContents}
                </h1> */}
             
             </div>
        </div>
       
       
    );
        
       

  }

export default RenderMemo;