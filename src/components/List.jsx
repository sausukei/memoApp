// import AddButton from "./button";
// import {useRef} from 'react';
import React from 'react';
import '../index.css'
import MemoButton from "./MemoButton";
// import { rerendering } from './rerendering';
import restore from './restore';
// import RenderMemo from './RenderMemo';


// const AddButton = (props) => {
//     return(
//         <button onClick={props.click}>{props.name}</button>
//     );
// }

const ListUI = (props) =>{
        // const myRef = useRef(null);
        let i = 0;
       
        const handleClick = (key,content,index) =>{
           props.func(content);
           props.index(index);
           props.Key(key);
           console.log("(this is list)"+content)
           restore(key,content,index)
        }

        const memolist = []
        

        for (i=0;i<props.content.length;i++){
            const data = <MemoButton title={props.content[i].title} content={props.content[i].content}/>
            const content = props.content[i].content
            const key = props.content[i].title
            const index = i

            
            memolist.push(<button onClick={()=>handleClick(key,content,index)}>{data}</button>)
            
        }
    
        console.log(props.content.length)
        
        return (
            <div >
                <div className="box">
                    {memolist}
                </div>
                
            {/* <div>
                <AddButton name ="新規作成" click={clicking}/>
            </div> */}
            </div>

        );
        
}

export default ListUI;