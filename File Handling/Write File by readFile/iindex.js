
const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    fs.readFile("raj.txt",(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080);
