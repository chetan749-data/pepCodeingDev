// javascript is sync language, here we try to make it async

const fs= require("fs");
console.log("hello")
// fs.readFileSync("file.txt")  this reads file first and next goes to next line,, it waits until file.txt is read , but we dont want to wait and change that
 fs.readFile("file.txt",callback)
 function callback(error,data)
 {
     if(error)
     {
         console.log(error)

     }
     else{
         console.log(data+""); // data is inbuilt fs funaction which gives data of file.txt
     }
 }

 console.log("bye")

 // output for above code is 
//  hello                          
// bye
// hello I am file and trying JS async  
// bcz after hello it wont wait until it read file.txt, it goes to next line and executes after that callback function called and executed 
