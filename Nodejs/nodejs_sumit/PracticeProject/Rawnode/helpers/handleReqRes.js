const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes.js");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

const handler = {};

handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const reqProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headerObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;
  console.log(chosenHandler);



  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
    res.end("khela shesh");
  });

  req.on('end',()=>{
    realData+=decoder.end();

    chosenHandler(reqProperties, (statusCode, payLoad) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payLoad = typeof payLoad === "object" ? payLoad : {};
  
      const payLoadString = JSON.stringify(payLoad);
  
      res.writeHead(statusCode);
      res.end(payLoadString);
    });
    
    res.end('hello mama');
  })
};

module.exports = handler;
