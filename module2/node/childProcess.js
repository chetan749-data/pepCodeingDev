let cp= require("child_process");    // means we need or we use child process
// console.log(cp);
// cp.execFileSync("calc");  // to open a caluclator

// cp.execSync("code") // to open VS CODE


// to open testing.js we do use childProcess

let content=cp.execSync("node testing.js");
// console.log(content);  // u ll get content in binary format by default, to change into string any string+content, converts to string
console.log("output of testing js is: " + content);