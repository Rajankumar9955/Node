
const fs=require("fs");
fs.appendFile("raj.pdf","Hello Rajan Kumar",(err)=>{
    if(err) throw err;
    console.log("File Succesfully Created");
})