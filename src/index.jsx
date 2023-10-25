import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './components/box'
import ListUI from './components/List' 
import RenderMemo from './components/RenderMemo';
import Btn from './components/button';
import restore from './components/restore';

// import {createFile, dupliCheck} from './components/makejson';


// let memoData = {title: "今日の買い物", content: "にんじん、じゃがいも、玉ねぎ"};

// let memoDataJSON = JSON.stringify(memoData);

// console.log(memoDataJSON);

const Frame = () => {
  const contents = [{"title":"new memo","content":"contents was loaded"},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ"},{"title":"期末テスト","content":"数学、電気"}]
  const instant = Object(localStorage);
  const instantContent = Object.values(localStorage);
  console.log(contents[0])  
  const [content,setContent] = useState( contents[0].content);
  // const rerender = () =>{
  //   setContent(content);
  //   console.log("clicked"+content)
    
  // };
  const click = () =>{
    console.log(instant)
    console.log(instantContent)
    // localStorage.clear();
  }

  return (
    <div className="App">
      <div className='mainFrame' id ="mainFrame">

        <RenderMemo content={content} setContent = {setContent}/>
        <ListUI content={contents} func = {setContent}/>
        <Btn name = {content} onClick={()=>{restore(content)}}/>
        <button onClick={()=>click()}>ああ</button>
        

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



