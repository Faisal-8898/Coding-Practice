const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes.js");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");
const {parseJSON} = require('../helpers/utilities.js')

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




  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end',()=>{
    realData+=decoder.end();

    reqProperties.boby = parseJSON(realData);

    chosenHandler(reqProperties, (statusCode, payLoad) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payLoad = typeof payLoad === "object" ? payLoad : {};
  
      const payLoadString = JSON.stringify(payLoad);
      
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payLoadString);
    });
  })
};

module.exports = handler;
