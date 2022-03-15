// read content of unorganised folder and make  an array which has extension name of each file


let fs=require("fs")
let path=require("path");

// first lets find filepath from where we should get extensions
let folderPath=path.join(__dirname,"..","unorganisedFiles");

//read content in that folder
let content= fs.readdirSync(folderPath)
console.log(content);
 // create array to push the extension
 let extArr=[];

 for(let i=0;i<content.length;i++)
 {
    let name = content[i];
    let extName = path.extname(name);
    extArr.push(extName);
 }
 console.log(extArr)