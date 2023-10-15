import React from "react";
import {render} from "react-dom";

import "./memo.json";

function RenderMemo() {
    const requestURL =
      "./memo.json";
    const request = new Request(requestURL);
  
    const response = fetch(request);
    const superHeroes = response.json();
  
    return(
        console.log(superHeroes)
    );
        
       

  }

export default RenderMemo;