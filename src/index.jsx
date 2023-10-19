import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './components/box'
import ListUI from './components/List' 
import RenderMemo from './components/RenderMemo';

// import {createFile, dupliCheck} from './components/makejson';


// let memoData = {title: "今日の買い物", content: "にんじん、じゃがいも、玉ねぎ"};

// let memoDataJSON = JSON.stringify(memoData);

// console.log(memoDataJSON);

function Frame() {
  const contents = [{"title":"new memo","content":"contents was loaded"},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ"},{"title":"期末テスト","content":"数学、電気"}]
  console.log(contents[0])  
  const content = contents[0].content;
  const [title, setTitle] = useState("")

  const box = <RenderMemo content={content}/>
  return (
    <div className="App">
      <div className='mainFrame' id ="mainFrame">
       
        <Box name = {box}/>

        {/* <Box name = {data}/> */}
        <ListUI content={contents}/>

        <button className = "create-btn">+</button>
       
      </div>

    </div>
   
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Frame />
  </React.StrictMode>
);



