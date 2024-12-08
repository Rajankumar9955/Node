

const fs=require("fs");
fs.writeFile("raj.pdf","I am from Bihar",(err)=>{
    if(err) throw err;
    console.log("File Created!!");
})