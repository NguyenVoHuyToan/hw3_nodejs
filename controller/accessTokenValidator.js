import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const accessTokenValidator = (req, res, next) => {
  const { username, password } = req.body;

  const payload = { username, password };

  const register_token = jwt.sign({ payload }, process.env.SECRET_KEY);
  if (!username || !password) {
    return res
      .status(400)
      .json({
        message: "Please enter full registration information",
        result: register_token,
      });
  }
};
