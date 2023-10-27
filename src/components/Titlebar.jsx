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



    const Bset = () =>{
        // if(e.target.value!=""){
        //     restore(e.target.value,props.content,props.index);
        // }
        setValue(props.title);
        props.setTitle(value)
        restore(value,props.content,props.index);
        
        
    }

    const Fset = (e) =>{
        setValue(e.target.value)
        restore(props.title,props.content,props.index);
    }

    // onFocus={(e)=>set(e)}
    
    return(
        <div className ="title_box">
            <input class="form-control form-control-lg" key = {props.title} type="text" defaultValue={props.title} onKeyUp = {(e)=>edit(e)}  maxLength="100" onFocus={(e)=>{Fset(e)}} onBlur={()=>{Bset()}} autoFocus={true}/>
            {/* <button className = "title_enter" onClick={()=>handleClick()}>保存</button> */}
        </div>
    );

}

export default Titlebar;
