// 枠を作るコンポーネント
import '../index.css'

export default function Box (props){
    return(
        <div className="renderBox" id ="renderBox">
            {props.name}
            
        </div>
    )
}