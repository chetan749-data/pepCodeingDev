// diffrent types of files, inserted into respective folders
let input=process.argv; 
 console.log(input) // this gives array of [ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\HP\\Desktop\\Javascript\\module2\\Project\\fileOrganiser.js'  ]
// where 0th index gives node installed, 1st index gives current file path, so 2nd index gives whatever input we give in terminal like node fileOrganiser inputWord,
// to access that we need to give argv[2]
let inputTaken=input[2];
console.log(inputTaken)  
//C:\Users\HP\Desktop\Javascript\module2\Project>node fileOrganiser.js chetan  terminal where input given as chetan, 
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\HP\\Desktop\\Javascript\\module2\\Project\\fileOrganiser.js',
//     'chetan'
//   ] // this array consoled for input
//   chetan // this consoled for inputTaken