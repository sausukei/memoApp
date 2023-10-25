
const firstStorage = ()=>{
    const contents = [{"title":"new memo","content":"contents was loaded"},{"title":"買い物","content":"にんじん、ジャガイモ、玉ねぎ"},{"title":"期末テスト","content":"数学、電気"}]
    if(!localStorage.getItem(0)){
        let i = 0;
        for (i=0;i<contents.length;i++){
            localStorage.setItem(i,JSON.stringify(contents[i]))
        }
    }else{
        console.log("storage has value")
    }
}

export default firstStorage;