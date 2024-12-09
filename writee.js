
const fs=require("fs");
fs.rename("rajj.txt","rajan.txt",(err)=>{
    if(err) throw err;
    console.log("File Rename Successfully!!");
})