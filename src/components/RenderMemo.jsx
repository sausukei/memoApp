import React from "react";
import {render} from "react-dom";

import "./memo.json";

function RenderMemo() {
   
    const memoContents = "にんじん、じゃがいも、玉ねぎ";
    return(
        <div>
            <form>
                <textarea  className= "memo" defaultValue={memoContents} cols="10" rows = "20" maxLength="200"/>
            </form>
             
        </div>
       
    );
        
       

  }

export default RenderMemo;