let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let order = (fruit_name,production) => {
    
    setTimeout(()=>{
        console.log(`order placed , ${stocks.Fruits[fruit_name]} was seleted`);
        production();
    },2000)
    
}
let produce = () => {
   setTimeout(()=>{
    console.log("cut the fruit");
        setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`);
            setTimeout(()=>{
            console.log("starting the machine");
                setTimeout(()=>{
                console.log(`${stocks.holder[0]} has been selected`);
                    setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} has been seleted as toppings`);
                        setTimeout(()=>{
                        console.log("ICE cream is ready to be served");
                        },2000)
                    },3000)
                },2000)
            },1000)
         },1000)
    },2000)
}
order(0,produce);