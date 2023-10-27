import restore from "./restore";
import { useState } from "react";

const Titlebar = (props) =>{
    const [value,setValue] = useState(props.title)
    const edit = (e) =>{

        setValue(e.target.value)
        console.log(value)
        // if(e.target.value!=""){
        //     restore(e.target.value,props.content,props.index);
        // }

        restore(value,props.content,props.index);
        
    }



    const set = (e) =>{
        e.target.value=props.title
        
    }
    
    return(
        <div className ="title_box">
            <input class="form-control form-control-lg" key = {props.title} type="text" defaultValue={props.title} onKeyUp = {(e)=>edit(e)} onFocus={(e)=>set(e)} maxLength="100" autoFocus={true}/>
            {/* <button className = "title_enter" onClick={()=>handleClick()}>保存</button> */}
        </div>
    );

}

export default Titlebar;
