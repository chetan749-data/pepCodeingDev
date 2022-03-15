//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
// fs.mkdirSync("new folder") // new folder created in same directory
let fs=require('fs');
let path=require("path")
if(!fs.existsSync("newFolder")) // if not existing , 
    fs.mkdirSync("newFolder")  // create newFolder 


let filePath=path.join(__dirname,"newFolder","file.txt") // newfolder created and in that file.txt is created
fs.writeFileSync(filePath,"hello everyone") // hello everyone is printed in file.txt

