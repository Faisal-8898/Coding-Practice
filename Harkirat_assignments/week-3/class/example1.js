const express = require("express");
const zod = require("zod");

const app = express();
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  //const kidneyLength = kidneys.length;
  if (!response.success) {
    res.status(401).json({
      msg: "invalid input",
    });
  } else {
    res.send({ response });
  }
});

app.listen(3000);
