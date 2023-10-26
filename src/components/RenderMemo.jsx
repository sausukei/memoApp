import React from "react";
import restore from "./restore";


const RenderMemo = (props) =>{
   
    const memoContents = props.content;
    // const check = () =>{
    //     // props.setContent(e.target.v alue)
    //     console.log(memoContents)
    // }
    

    const event=(e)=>{
        console.log("write")
        restore(props.Key,e.target.value,props.index)
    }
    
    return(

        <div className="renderBox" id ="renderBox">
             <div>
                <form className="renderArea">
                    <textarea  className= "memo" cols="10" rows = "20" maxLength="100" key = {memoContents} defaultValue ={memoContents} onKeyUp ={(e)=>event(e)}/>
                </form>
                {/* <h1 onClick={()=>check()}>
                    {memoContents}
                </h1> */}
             
             </div>
        </div>
       
       
    );
        
       

  }

export default RenderMemo;