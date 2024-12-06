

// var http=require("http");               //inbuild module:- http,os,fs;
// http.createServer((req,res)=>{
//     res.write("<h1>Welcome to bhopal!</h1>");
//     res.end()
// }).listen(8000);

//-----------------------------

// let http=require("http");

// let server=http.createServer(function(req,res){
//     res.write("<h1>Hello World!</h1>");
// })

// server.listen(8080, ()=>{
//         console.log("Run on 8080 port");
// })






// let http=require("http");
// const myclg=require("./Cybrom");
// http.createServer((req,res)=>{
//     res.write("<h1>Hello Function");
//     res.write(myclg.Mycollege());
//     res.end();
// }).listen(8000);



let http=require("http");
const bpl=require("./Cybrom")
http.createServer((req, res)=>{
     res.write("<h2>Hello Raj Malhotra</h2>");
      res.write(bpl.Mycollege());
      res.write(bpl.course());
      res.write(bpl.Fees());
     res.end();
}).listen(9000);