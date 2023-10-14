// import AddButton from "./button";
import {useRef} from 'react';
import React, {useState} from 'react';
import '../index.css'


const AddButton = (props) => {
    return(
        <button onClick={props.click}>{props.name}</button>
    );
}

const RenderMemo = () => {
    return(
        <div className = "memoTitle">
            <p>
                今日の買い物リスト
            </p>
        </div>
    );
}

const ListUI = () =>{
        const myRef = useRef(null);
        const [active, setActive] = useState(false);
        const clicking = () => {
            setActive(!active)
        
        }
    
        
        
        return (
            <div className="box">
            <table  ref = {myRef} >
                <RenderMemo />
            </table>
            {/* <div>
                <AddButton name ="新規作成" click={clicking}/>
            </div> */}
            </div>

        );
        
}

export default ListUI;