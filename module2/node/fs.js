let fs=require("fs")  // to call file system
// console.log(fs)
let path=require("path"); // to call path which is needed to cretae a path for any file to be created


//CRUD operation Create, Read, update, delete
// we will create path for file which we created
let newFilePath= path.join(__dirname,"file.text");
// console.log(newFilePath)   gives output //C:\Users\HP\Desktop\Javascript\module2\node\file.text
//C- to create
fs.writeFileSync(newFilePath,"Hellow this is chetan"); // this creates a new file with file.text and adds content if file doesnt exist, and it overwrites if already exists

// R-to read
// console.log(fs.readFileSync(newFilePath)); // gives output in binary
console.log(fs.readFileSync(newFilePath,"utf-8")); // output : Hellow this is chetan


// to update 
fs.appendFileSync(newFilePath," This text is added newly")  // to update the text
fs.appendFileSync(newFilePath,"\n it comes in next line")
console.log(fs.readFileSync(newFilePath,"utf-8"));  // to read the text

//D-Delete
fs.unlinkSync(newFilePath); // file.txt will be deleted