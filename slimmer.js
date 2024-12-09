const http=require("http");

http.createServer((req,res)=>{
    res.write("<h1> Hello Brother</h1>");
    res.write("<h1> Hello Brother</h1>");
    res.write("<h1> Hello Brother</h1>");
    res.write("<h1> Hello Brother</h1>"); 
}).listen(8000 , ()=>{
    console.log("Server run on 8000! port!");
});
