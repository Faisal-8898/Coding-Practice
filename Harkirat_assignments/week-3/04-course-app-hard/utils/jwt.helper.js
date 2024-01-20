import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.model.js";

const generateJwtToken = (obj) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      obj,
      process.env.SECRET_KEY,
      { expiresIn: "30h" },
      (err, token) => {
        if (err) {
          console.error("Error in generating Token", err);
          reject(err);
        }
        resolve(token);
      },
    );
  });
};
export { generateJwtToken };
