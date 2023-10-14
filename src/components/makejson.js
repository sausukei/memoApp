import React from "react";
const fs = require('fs');


const createFile = (pathName, source) => {
    const isExist = dupliCheck(pathName);
    if(isExist) return console.log('既存のパスが見つかりました');

    const toJSON = JSON.stringify(source);
    fs.writeFile(pathName, toJSON, (err) => {
        if(err) throw err;
        if(!err) {
            console.log('JSONファイルを生成しました')
        }
    });
};

const dupliCheck = (pathName) => {
    try {
        fs.statSync(pathName);
        return true
    }catch(err){
        if(err.code==="ENOENT") return false
    }
};

// createFile('memo.json', memoData)

export default createFile;