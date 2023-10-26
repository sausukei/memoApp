import restore from "./restore";

const Titlebar = (props) =>{

    const edit = (e) =>{
        console.log(e.target.value);
        
        // if(e.target.value!=""){
        //     restore(e.target.value,props.content,props.index);
        // }
       
   
    }

    const reset = (e) =>{
        console.log("blurd")
        if(e.target.value==""){
            
            restore(props.title,props.content,props.index);
            console.log("title=null")
        }else{
            props.setTitle(e.target.value);
            restore(e.target.value,props.content,props.index);
            console.log("title has text")
        }
        e.target.value = "";
        
    }

    const set = (e) =>{
        e.target.value=props.title;
    }
    
    return(
        <div className ="title_bar">
            <input type="text" defaultValue={props.title} onKeyUp = {(e)=>edit(e)} onBlur={(e)=>reset(e)} onFocus={(e)=>set(e)}/>
        </div>
    );

}

export default Titlebar;
