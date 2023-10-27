const callStorage = (key) =>{
    const data = JSON.parse(localStorage.getItem(key)); 

    return data;
}

export default callStorage;