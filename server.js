const http = require("http");
const fs = require("fs");
//look into request and see what the client is requesting maybe if statements.
//console.log it if needed to see what is in it
//req.url string like / or /static/images/dog
//reccommend save it in a variable
//url.includes or url.endsWith or url.split('/' or '/static/)

//if user is looking for home page
//else if user looking for images
// else if user looking for css
//this is routing how do i do this with code
//fs.readfilessync pull it out return it to them
//tested with postman or browser. may be some differences.
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url.endsWith('css')) {
    const css = fs.readFileSync('./assets/css/application.css', 'utf-8')
    res.statusCode = 200;
    res.getHeader('content-type', 'text/css')
    res.end(css);
  } else if (url.endsWith('jpg')) {
    const img = fs.readFileSync('./assets/images/dog.jpg')
    res.statusCode = 302;
    res.getHeader('content-type', 'image/jpeg')
    res.end(img)
  } else {

    const html = fs.readFileSync("./index.html", "utf-8");
    res.statusCode = 200;
    res.getHeader('content-type', 'text/html')
    res.end(html);
  }
  
  
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
