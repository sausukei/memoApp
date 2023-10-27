import React from "react";
import Markdown from 'react-markdown'




const RenderMD=(props)=>{
    const title = props.title;
    const content = props.content;

    const markdown = "# "+title+"\n"+content;

    return (
        <div className ="memo">
            <Markdown>
                {markdown}
                
            </Markdown>
        </div>
        
    );
}

export default RenderMD;