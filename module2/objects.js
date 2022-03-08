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
// console.log(obj.friends[2]); prints onday
// console.log(obj.address.state) prints karnataka
// console.log(obj.sayHi)  //prints         sayHi: [Function: sayHi]
(obj.sayHi()); // to print or call a functioon   prints hello world

// to add any extra key
obj.native="Bijapur";
// console.log(obj)  //native is added
delete obj.native;
console.log(obj)  //native is removed


// access 2 way
console.log(obj.Name)
console.log(obj["Name"])