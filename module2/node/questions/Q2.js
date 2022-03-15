// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs=require("fs");
let path=require("path");

let arr=["audio","video","software","documents","Applications","Others"];  // type of different files
let filesArr=["abc","xyz","MNO","PQR"]; //file names
let extArr=[".mp3",".mp4",".exe",".pdf",".apk",".jar"]; //extensions of files

let organisePath=path.join(__dirname,"organisePath");  // to create main folder which is "organiseAPth"
if(!fs.existsSync(organisePath)) // it will chck whether folder name called organsie path exists or not, if not then
    fs.mkdirSync(organisePath)  // make a direcory callld path organisepath

for(let i=0;i<arr.length-1;i++)    // to iterate all types of files and create all types of files, create 5 folders for all types of diles
{
    let folderPath=path.join(organisePath,arr[i]);  //  to create path for all types of files
    if(!fs.existsSync(folderPath))  // check existing
        fs.mkdirSync(folderPath)  // create if not existing

    for(let j=0;j<filesArr.length;j++)  // to print all files in each folder called audio, vieo, etc
    {
        let fileName=filesArr[j]+extArr[i]; // to create a file with file name.extension
        let filePath=path.join(folderPath,fileName); //create path for each file
        fs.writeFileSync(filePath,"") // write something in each file
    }
}


// let fs = require("fs");
// let path = require("path");

// let arr = ['Audio','Video','Software','Documents','Applications','Others'];
// let nameArr = ['abc','efg','xyz','def'];
// let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

// let organisePath = path.join(__dirname,"Organise");
// if(!fs.existsSync(organisePath))
//     fs.mkdirSync(organisePath);

// for(let i=0;i<arr.length;i++){
//     let folderKaPath = path.join(organisePath,arr[i]);
//     if(!fs.existsSync(folderKaPath))
//         fs.mkdirSync(folderKaPath)
//     for(let j=0;j<nameArr.length;j++){
//         let fileName = nameArr[j]+extArr[i];
//         let fileKaPath = path.join(folderKaPath,fileName);
//         fs.writeFileSync(fileKaPath,"");
//     }
// }