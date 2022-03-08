let cp= require("child_process");    // means we need or we use child process
// console.log(cp);
// cp.execFileSync("calc");  // to open a caluclator
console.log("expecting to run test file", cp.execFileSync("node testing.js"));