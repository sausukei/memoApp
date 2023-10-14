import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './components/box'
import ListUI from './components/memoUI'
// import {createFile, dupliCheck} from './components/makejson';


let memoData = {title: "今日の買い物", content: "にんじん、じゃがいも、玉ねぎ"};

let memoDataJSON = JSON.stringify(memoData);

console.log(memoDataJSON);


function Frame() {
  return (
    <div className="App">
     
      <div className='mainFrame'>
        <Box />
        <h1>とりあえずここにメモ帳アプリを作ります</h1>
        <button onClick={console.log(memoData)}>aa</button>
      </div>

    </div>
   
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Frame />
  <ListUI />
  
  </React.StrictMode>
);



