// 枠を作るコンポーネント
import '../index.css'

export default function Box (props){
    return(
        <div className="renderBox">
            <h1>{props.name}</h1>
        </div>
    )
}