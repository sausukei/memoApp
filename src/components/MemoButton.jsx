import {React} from 'react';
// import RenderMemo from './RenderMemo'
// import { rerendering } from './rerendering';



const MemoButton = (props) => {
    const title = props.title;
    // const content = props.content;

    return (
    
            <li className = "memoTitle" >{title}</li>
 
    );
}

export default MemoButton;