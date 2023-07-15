let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_open = true;

let order = (time,work) =>{
    return new Promise((resolve,reject)=>{
        if(!is_open){
            setTimeout(()=>{
                resolve(work());
            },2000)
        }
        else{
            reject('The itemis not there');
        }
    })
}
order(2000,()=>{
    console.log(`order placed , ${stocks.Fruits[0]} was seleted`);
})
.then(()=>{
    return order(1000,()=>{console.log("starting the machine")})
})
.then(()=>{
    return order(2000,()=>{console.log(`${stocks.holder[0]} has been selected`);})
})
.then(()=>{
    return order(1000,()=>{console.log("ICE cream is ready to be served");})
})
.catch(()=>{
    console.log("Customer left")
  })
.finally(()=>{
    console.log("end of the day")
})
