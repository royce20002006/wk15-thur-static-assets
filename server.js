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
  const html = fs.readFileSync("./index.html", "utf-8");
  console.log(html);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
