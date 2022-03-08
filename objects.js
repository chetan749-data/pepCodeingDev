let obj={
    Name:'chetan',
    Age:27,
    'Last Name':'Kul',
    friends:["abc","chetan","onday","gth"],
    address:{
        city:"Bangalore",
        state:"karnataka"
    },
    sayHi:function(){
        console.log("hello world")
    }
};
console.log(obj.friends[2]);
console.log(obj.address.state)