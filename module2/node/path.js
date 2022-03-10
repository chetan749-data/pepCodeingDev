// "C:\Users\HP\Desktop\Javascript\module2\node\path.js" // path of path.js file,,, using righclickon path.js>copy path
let path=require('path');
// console.log(path); // gives object of different keys for any file path

// to get extension of any particular file
let extensionName=path.extname("C:\Users\HP\Desktop\Javascript\module2\node\path.js")
// console.log(extensionName);

// to get base name of any path
// let baseName= path.basename("C:\Users\HP\Desktop\Javascript\module2\JS\objects.js");
// console.log(baseName);      // getting problem when we give path, instead we give dirname dynamically

// instead we can use __dirname   gives path to current file or folder path

console.log(__dirname);  //gives C:\Users\HP\Desktop\Javascript\module2\node

console.log(__filename); //gives C:\Users\HP\Desktop\Javascript\module2\node\path.js

let baseName= path.basename(__filename);
console.log(baseName);

// if you want add new file in any dirname
let newPath=path.join(__dirname,"newPath.js");  // added newPath.js to dirname
console.log(newPath);
