
const fs=require("fs");
fs.unlink("raj11.pdf",(err)=>{
    if(err) throw err;
    console.log("File Deleted!!");
})