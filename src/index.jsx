import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListUI from './components/List' 
import RenderMemo from './components/RenderMemo';
import Btn from './components/button';
import restore from './components/restore';
import firstStorage from './components/firstStorage';
import Titlebar from './components/Titlebar';

// import {createFile, dupliCheck} from './components/makejson';


// let memoData = {title: "今日の買い物", content: "にんじん、じゃがいも、玉ねぎ"};

// let memoDataJSON = JSON.stringify(memoData);

// console.log(memoDataJSON);

const Frame = () => {
  firstStorage();
  // const contents = [{"title":"new memo","content":"contents was loaded"},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ"},{"title":"期末テスト","content":"数学、電気"}]
  const keys = Object.keys(localStorage)
  const contents =[]
  const [index,setIndex] = useState(0);
  
  let i = 0;

  for(i=0;i<keys.length;i++){
    contents.push(JSON.parse(localStorage.getItem(keys[i])))
    console.log("get key")

  }
  // const source = Object.keys(localStorage).forEach((key)=> {instant.push(localStorage.getItem(key))});

  console.log(contents[0])  
  const [content,setContent] = useState(contents[0].content);
  const [key, setKey] = useState(contents[0].title);
  // const rerender = () =>{
  //   setContent(content);
  //   console.log("clicked"+content)
    
  // };
  const click = () =>{
    console.log(contents)
    console.log(key)
    
    // console.log(instant)
    
    localStorage.clear();

    // localStorage.clear();
  }

  return (
    <div className="App">
      <div className='mainFrame' id ="mainFrame">

        <Titlebar setTitle = {setKey} index = {index} content = {content} title = {key}/>
        <RenderMemo content={content} setContent = {setContent} index = {index} Key={key}/>
        <ListUI content={contents} func = {setContent} index = {setIndex} Key={setKey}/>
        <Btn name = {content} onClick={()=>{restore(content)}}/>
        <button onClick={()=>click()}>clear cash</button>
        

      </div>
      

    </div>
   
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Frame />

);



