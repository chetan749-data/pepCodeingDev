// let fs=require('fs')
// let path=require("path")
// let folderPath=process.argv[2]; // means at 2nd index, we give input
// // we take download folder path as input which we give in folder path using node fileOrg.js C:\Users\HP\Desktop\Javascript\module2\Project\Download

// let folderExists=fs.existsSync(folderPath); // we check path given exis or not 

// // lets create object of extensions
// let extension={
//     Audio:[".mp3"],
//     video:[".mp4",".mkv"],
//     document:[".pdf",".doc",".xlsx",".txt"],
//     software:[".exe",".apk"],
//     image:[",jpeg",".jpg",".png",".gif"],
//     others:["tar","zip"]

// }
// if(folderExists)
// {
//     // folder path is exisiting so proceed;
//     console.log("path is valid")
//     let filesInDownload=fs.readdirSync(folderPath); // to read files in folder of given path
//     // console.log(filesInDownload) // gives all files 
//     for(let i=0;i<filesInDownload.length;i++)
//     {
//         // we take extensions for each file
//         let extName=path.extname(filesInDownload[i]);
//         let folderName=giveFolderName(extName); // function to find folder name
//         console.log("file extension==>",extName, "foldername==>",folderName)
//         let pathOfFolder = path.join(folderPath,folderName);  // to create folder of different files
//         let exist = fs.existsSync(pathOfFolder); // to check folder exist or not
//         if(exist){
//             moveFile(folderPath,pathOfFolder,filesInDownload[i]);  // if folder exists then move file to that folder
//         }else{
//             fs.mkdirSync(pathOfFolder); // else create and move
//             moveFile(folderPath,pathOfFolder,filesInDownload[i]); // moveFile() function calleed below 
//         }
//     }
// }
// else{
//     console.log("not a valid path")
// }

// function giveFolderName(extName){
//     for(let key in extension)
//     {
//         let extArr=extension[key]; // gives array of key 
//         for(let j=0;j<extArr.length;j++ )
//         {
//             if(extArr[j]==extName)
//             {
//                 return key
//             }
//         }
//     }
//     return "others"
// }
// function moveFile(folderPath,pathOfFolder,fileName){
//     let sourcePath = path.join(folderPath,fileName);
//     let destinationPath = path.join(pathOfFolder,fileName);
//     fs.copyFileSync(sourcePath,destinationPath);
//     fs.unlinkSync(sourcePath);
// }
let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

// console.log(folderPath);
let folderExists = fs.existsSync(folderPath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

if(folderExists){
    //we will code
    // console.log("path is valid!!!!!!");
    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log("Ext--",ext,"Folder--",nameOfFolder);
        let pathOfFolder = path.join(folderPath,nameOfFolder); 
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}
else{
    console.log("Please Enter a Valid Path!!!!!!!");
}


function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return 'Others'
}


function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}