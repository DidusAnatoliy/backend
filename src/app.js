const http = require("http");
const getUsers = require("./modules/users");
const { URL } = require("url");

const server = http.createServer((request, response) => {
  const ipAdress = "http://127.0.0.1:3003";
  const url = new URL(request.url, ipAdress);

  const userName = url.searchParams.get("hello");
  if (userName) {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Hello, ${userName}`);
    response.end();
    return;
  }
  if (request.url === "/?hello") {
    response.statusCode = 400;
    response.statusMessage = "Bad Request";
    response.setHeader("Content-Type", "text/plain");
    response.write("Enter a name");
    response.end();
    return;
  }

  if (request.url === "/users") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "application/json");
    response.write(getUsers());
    response.end();
    return;
  }
  if (request.url === "/") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "text/plain");
    response.write("Hello, world!");
    response.end();
    return;
  }
  response.statusCode = 500;
  response.statusMessage = "Bad Request";
  response.setHeader("Content-Type", "text/plain");
  response.write("{}");
  response.end();
  return;

});


server.listen(3003, () => {
  console.log("Север запущен по адресу http://127.0.0.1:3003");
});