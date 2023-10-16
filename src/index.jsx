import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './components/box'
import ListUI from './components/memoUI' 
import RenderMemo from './components/renderMemo';
import './components/memo.json'

// import {createFile, dupliCheck} from './components/makejson';


// let memoData = {title: "今日の買い物", content: "にんじん、じゃがいも、玉ねぎ"};

// let memoDataJSON = JSON.stringify(memoData);

// console.log(memoDataJSON);

const fs = require('fs-extra')
const file = './componets/memo.json'
const data = fs.readJSONSync(file)


function Frame() {
  return (
    <div className="App">
      <div className='mainFrame'>
        <h1>ここがメモ帳アプリ</h1>
        
        {/* <Box name = "とりあえずここにメモ帳を作ります"/> */}
        <Box name = {data}/>
        <ListUI />
        <button className = "create-btn">+</button>
       
      </div>

    </div>
   
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Frame />
 
  {/* <RenderMemo /> */}
  </React.StrictMode>
);



