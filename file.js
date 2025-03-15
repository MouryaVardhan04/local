//in real-life java script we are not going to use file directory



const fs = require("fs");

//Sync file creation
// fs.writeFileSync('./text.txt',"This is the file");

//async file creation
// fs.writeFile('./text.txt',"This is the async file",(err)=>{});

//sync read file
// const result = fs.readFileSync('./text.txt',"utf-8");
// console.log(result);

//Async read file
// fs.readFile('./text.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log("Error");
//     }else{
//         console.log(result);
//     }
// })

//append text
// fs.appendFileSync('./text.txt',`\nDate Now : ${Date.now()}`);

//copy file
// fs.cpSync('./text.txt','./copy.txt');

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync('./text.txt'));

//Sync.....  Blocking Req......

//Async...... Non-Blocking Req.......