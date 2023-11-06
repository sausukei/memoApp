import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListUI from './components/List' 
import RenderMemo from './components/RenderMemo';
import firstStorage from './components/firstStorage';
import Titlebar from './components/Titlebar';
import RenderMD from './components/RenderMD';
import {Container, Row, Col} from 'react-bootstrap';
import restore from './components/restore';
import callStorage from './components/callstorage';
import addMemo from './components/addMemo';


const Frame = () => {
  firstStorage();
  // const contents = [{"title":"new memo","content":"contents was loaded"},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ"},{"title":"期末テスト","content":"数学、電気"}]
  const keys = Object.keys(localStorage)
  const contents =[]

  
  let i = 0;

  for(i=0;i<keys.length;i++){
    contents.push(JSON.parse(localStorage.getItem(i)))
    console.log("get key"+contents)
  }

  const [I,setI] = useState(i);
  console.log("今のIは"+i)
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
      addMemo(I);
      setI(I+1);
      console.log("add"+I)
    }

    const del = () =>{
      if(I>1){
        localStorage.removeItem(I-1);
        setI(I-1);
        console.log("del"+I);
      }
      
    }

  return (

    <Container fluid>
      <div className="App">
        <div className='mainFrame' id ="mainFrame">
              <Row>

                <nav class="navbar navbar-dark bg-dark">
                  <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  </div>
                </nav>
                <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                  <div class="bg-dark p-4">
                    <Container fluid>
                      <Col sm md="auto">
                      <ListUI content={contents} func = {setContent} index = {setIndex} Key={setKey} setI={setI} I = {I}/>
                      </Col>
                      <Col sm md="auto">
                        <button class = "btn btn-success"onClick={()=>add()}>add memo</button>
                        <button class = "btn btn-danger"onClick={()=>del()}>delete memo</button>
                        <button class = "btn btn-secondary" onClick={()=>{modeSwitch()}}>{TFname}</button>
                      
                      </Col>
                   
                    </Container>
               
                  </div>
                </div>

                

                <Row>
                  <div>


                      {title}
                      {memo}


                  </div>
                </Row>
       

              </Row>

       
              
        
    
              
        

            </div>
            <div className = "utils">
                  
                  {/* <div className = "colorChanger">
                  <label for="exampleColorInput" class="form-label">Color picker</label>
                  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
                  </div> */}
            </div>
         
          </div>
        </Container>
   
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Frame />

);



