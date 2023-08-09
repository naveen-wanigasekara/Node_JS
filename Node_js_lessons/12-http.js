const http = require ('http');
const server = http.createServer((req, res) => {
    // res.writeHead(200);
    if (req.url === '/') {
        res.end('Welcome Naveen!!');
    }
    else if (req.url === '/about'){
        res.end('Here is our about page');
    }
    else {
        res.end(`
        <h1>Oops! PAGE NOT FOUND</h1>
    <a href="/">back to home</a>
        `);
    }
})
server.listen(8080);