const http =require('http');
const products = require('./data/products.json');

const server = http.createServer((req,res)=>{
    if(req.url==='/api/products'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    }

}) 



const PORT = process.env.PORT || 5000

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));

