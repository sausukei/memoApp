// この関数を呼び出すことでデータをwebに保存する
import React from "react";

const restore = (key,data) =>{


    localStorage.setItem(key,data);
    // const a = sessionStorage.getItem(data);
    console.log("stored "+key+data);

   
    
}

export default restore;

