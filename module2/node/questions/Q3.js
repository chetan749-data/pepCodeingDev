//copy index.html file from module1 to a new folder inside module2 having name html.


let fs= require("fs");
let path= require('path');
 //first we should find sorce path from where we need file to be copied from
let srcPath=path.join(__dirname,"..","..","..","module1","index.html");
console.log(srcPath)
let destPath=path.join(__dirname,"..","..","index.html")
console.log(destPath)





   // class code
// let fs = require("fs");
// let path = require("path");

// let srcPath = path.join(__dirname,"..","..","..","Module1","index.html");
// console.log("source path --> ",srcPath);
// let destPath = path.join(__dirname,"..","..","index.html");
// console.log("destination --> ",destPath);

// fs.copyFileSync(srcPath,destPath);