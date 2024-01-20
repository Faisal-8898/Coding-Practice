import jwt from "jsonwebtoken";

const validationJwtToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
          console.log("token verificaiton failed");
          return res
            .status(404)
            .json({ message: "Invalid Token , Please Log in !" });
        }
        req.user = decode;
        next();
      });
    } else {
      res.status(403).json({ message: "Authorization header not found" });
    }
  } catch (error) {
    console.error("token validation error", error);
  }
};

export { validationJwtToken };
