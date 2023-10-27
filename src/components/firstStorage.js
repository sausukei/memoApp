
const firstStorage = ()=>{
    const contents = [{"title":"こだわったポイント",
    "content":"メモ追加/削除機能を実装したこととMarkDownに対応していることです。","index":0},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ","index":1},{"title":"期末テスト","content":"数学、電気","index":2},
    {"title":"markdown",
    "content":"# マイプロジェクトの概要\n\nこの文書は、**マイプロジェクト**の概要を示すものです。このプロジェクトは、ユーザーがさまざまな情報を取得できるウェブサイトの開発に関連しています。\n\n## セクション1: プロジェクトの目的\n\nこのプロジェクトの主な目的は：\n\n1. ユーザビリティの向上\n2. コンテンツの質の向上\n3. 高速なページのロード\n## セクション2: 機能\n\n### ユーザーログイン\n\n- ユーザー名とパスワードでログイン\n- パスワードのリセット機能\n",
    "index":3},
    {"title":"new memo", "content":"none","index":4}]
    if(!localStorage.getItem(0)){
        let i = 0;
        for (i=0;i<contents.length;i++){
            localStorage.setItem(i,JSON.stringify(contents[i]))
        }
    }else{
        console.log("storage has value");

        
    }
}

export default firstStorage;