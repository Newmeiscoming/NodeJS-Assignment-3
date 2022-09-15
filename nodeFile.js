const fs = require("fs");
const http = require('http');

fs.writeFileSync("index.html",`<h1>Hello World</h1>
<p>My Name is Abhishek Shivhare</p>`)
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync("index.html"));
})

server.listen(5000,'127.0.0.1',()=>{
    console.log("Local server is listening the requests");
})

