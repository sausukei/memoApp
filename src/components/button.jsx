import React from "react";


const Btn = (props) =>{
    return(
        <div>
            <button onClick={() => console.log("(this is btn)"+props.name)} className = "create-btn">あ</button>
            {console.log("Btn component loaded")}
        </div>
    );
}

export default Btn