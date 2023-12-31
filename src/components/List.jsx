// import AddButton from "./button";
// import {useRef} from 'react';
import {React} from 'react';
import '../index.css'
import MemoButton from "./MemoButton";



//, ButtonToolbar
// import { rerendering } from './rerendering';
// import restore from './restore';


// import RenderMemo from './RenderMemo';


// const AddButton = (props) => {
//     return(
//         <button onClick={props.click}>{props.name}</button>
//     );
// }

const ListUI = (props) =>{
        // const myRef = useRef(null);
        
       
        const handleClick = (title,content,index) =>{
           console.log("thisisindex"+index+title+content)
           props.func(content);
           props.index(index);
           props.Key(title);
           
           
        //    console.log("(this is list)次の要素をストレージに保存します"+"key"+index+"title"+key+"content"+content)
            
        }

 
    

        const memolist = []
        let i = 0;

        for (i=0;i<props.content.length;i++){
            const data = <MemoButton title={props.content[i].title} content={props.content[i].content}/>
            const content = props.content[i].content
            const title = props.content[i].title
            const index = props.content[i].index
            
            memolist.push(<button className = "list_btn" class="btn btn-primary btn-sm rounded-0 mr-2 text-start" onClick={()=>handleClick(title,content,index)}>{data}</button>)
            
        } 
    
        console.log(props.content.length)
        
        
        return (
            <div className="Listbox">
                <div class="btn-group-vertical" role="group" aria-label="縦積みボタングループ">

                    {memolist}
                </div>
                
               
            </div>

        );
        
}

export default ListUI;