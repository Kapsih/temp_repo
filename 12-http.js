const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to our home page")
    }
    if(req.url === "/about"){
        res.end("Here is a brief history of our company")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">Back home</a>
    `
    )
   
})
server.listen(5000)