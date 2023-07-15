let prom = new Promise((resolve,reject)=>{
    let a = 1+1;
    if(a==2){
        resolve(`info attained ${a}`);
    }
    else{
        reject({
            name : "suseela",
            age : 19
        });
    }
})

prom.then((message)=>{
    console.log("this is success",message)
}).catch((message)=>{
    console.log("this is fail",message)
});