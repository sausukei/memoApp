import React from "react";
import Markdown from 'react-markdown'




const RenderMD=(props)=>{
    const title = props.title;
    const content = props.content;

    const markdown = "# "+title+"\n"+content;

    return (
        <div className ="markdown">
            <Markdown>
                {markdown}
                
            </Markdown>
        </div>
        
    );
}

export default RenderMD;