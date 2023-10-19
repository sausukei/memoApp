import { useState } from "react";
import React from "react";

import "./memo.json";

function RenderMemo(props) {
   
    const memoContents=props.content;
    
    
    return(
        <div>
            <form className="renderArea">
                <textarea  className= "memo" defaultValue={memoContents} cols="10" rows = "20" maxLength="200"/>
            </form>
             
        </div>
       
    );
        
       

  }

export default RenderMemo;