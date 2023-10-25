import React from "react";
// import ReactDOM from 'react-dom/client';
// import Box from './box'
import RenderMemo from './RenderMemo';


export const rerendering = (props) =>{
    console.log(props)
    return(
        <div>
            <RenderMemo content={props}/>
        </div>
    );
}