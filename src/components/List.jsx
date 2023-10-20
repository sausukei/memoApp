// import AddButton from "./button";
import {useRef} from 'react';
import React, {useState} from 'react';
import '../index.css'
import MemoButton from "./MemoButton";
import { rerendering } from './rerendering';
import RenderMemo from './RenderMemo';


// const AddButton = (props) => {
//     return(
//         <button onClick={props.click}>{props.name}</button>
//     );
// }



const ListUI = (props) =>{
        const myRef = useRef(null);
        let i = 0;
        const [active, setActive] = useState(props.content[i].content);
        const handleClick = async (content) =>{
 
           props.parent(<RenderMemo content={await props.child(content)}/>)
        }

        const memolist = []
        

        for (i=0;i<props.content.length;i++){
            const data = <MemoButton title={props.content[i].title} content={props.content[i].content}/>
            const content = props.content[i].content
            
            memolist.push(<button onClick={()=>handleClick(content)}>{data}</button>)
            
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