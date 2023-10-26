// この関数を呼び出すことでデータをwebに保存する
// import React from "react";g

const restore = (key,data,index) =>{

   const stockdata = {
     "title":key,
     "content":data,
     "index": index
   }

   const json = JSON.stringify(stockdata);

    localStorage.setItem(index,json);
    // const a = sessionStorage.getItem(data);
    console.log("stored "+key+data+"index = "+index);

   
    
}

export default restore;

