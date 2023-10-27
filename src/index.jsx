import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListUI from './components/List' 
import RenderMemo from './components/RenderMemo';
import firstStorage from './components/firstStorage';
import Titlebar from './components/Titlebar';
import RenderMD from './components/RenderMD';
import {Button, ButtonToolbar} from 'react-bootstrap';
import restore from './components/restore';
import callStorage from './components/callstorage';
import addMemo from './components/addMemo';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

// import {createFile, dupliCheck} from './components/makejson';


// let memoData = {title: "今日の買い物", content: "にんじん、じゃがいも、玉ねぎ"};

// let memoDataJSON = JSON.stringify(memoData);

// console.log(memoDataJSON);

const Frame = () => {
  firstStorage();
  // const contents = [{"title":"new memo","content":"contents was loaded"},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ"},{"title":"期末テスト","content":"数学、電気"}]
  const keys = Object.keys(localStorage)
  const contents =[]

  
  let i = 0;

  for(i=0;i<keys.length;i++){
    contents.push(JSON.parse(localStorage.getItem(i)))
    console.log("get key"+contents)
    console.log(contents)
    
   

  }
  const [I,setI] = useState(i);
  // const source = Object.keys(localStorage).forEach((key)=> {instant.push(localStorage.getItem(key))});

  console.log(contents[0])  
  const [content,setContent] = useState(contents[0].content);
  const [key, setKey] = useState(contents[0].title);
  const [index,setIndex] = useState(contents[0].index);
  // const rerender = () =>{
  //   setContent(content);
  //   console.log("clicked"+content)
  let memo
  let title
  const [TF,setTF] = useState(true)
  const [TFname, setTFname] = useState("markdownモードにする");
  if(TF){
    title = <Titlebar setTitle = {setKey} index = {index} content = {content} title = {key} setMemo = {setContent}/>
    memo = <RenderMemo content={content} index = {index} Key={key}/>
    
    

  }else{
    memo = <RenderMD title = {key} content={content}/>
    
  }

  const modeSwitch = ()=>{
    let instant = callStorage(index);
    console.log(instant);
    
    setTF(!TF)
    if(TF === true){
      setTFname("memoモードにする");
      setContent(instant.content);
      setKey(instant.title);
      setIndex(instant.index);
    }else{
      setTFname("markdownモードにする");
    

    }
    restore(key,content,index)
  }

    const add = () =>{
      setI(I+1);
      addMemo(I);
    
    
  }

      const del = () =>{
          localStorage.removeItem(I);
          setI(I-1);
          console.log(I);
          
      }

  return (
    <div className="App">
      <div className='mainFrame' id ="mainFrame">
        <div className ="memobox">
          

          {title}
          {memo}
   
          
        </div>
       
        <ListUI content={contents} func = {setContent} index = {setIndex} Key={setKey} setI={setI} I = {I}/>
        
    
        <div className = "utils">
          <Button bsStyle="success" onClick={()=>add()}>add memo</Button>
          <Button bsStyle="success" onClick={()=>del()}>delete memo</Button>
          <Button bsStyle="success" onClick={()=>{modeSwitch()}}>{TFname}</Button>

        </div>

          
  
          

        
        
          
        

      </div>
      

    </div>
   
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Frame />

);



