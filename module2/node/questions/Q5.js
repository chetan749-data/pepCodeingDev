//move a file like file.txt to any other file,,, (move not copy)
// there is no direct command to move, here we need to copy from source to dest then delete from src
// here we are moving file.text from node to new folder
let fs= require("fs")
let path= require("path")

let srcPath=path.join(__dirname,"..","file.text");
// let srcPath=("C:\Users\HP\Desktop\Javascript\module2\node\file.text")
console.log(srcPath);

let dstPath=path.join(__dirname,"newFolder","file.text");
console.log(dstPath);
fs.copyFileSync(srcPath,dstPath);  // copy from src to dst
fs.unlinkSync(srcPath)