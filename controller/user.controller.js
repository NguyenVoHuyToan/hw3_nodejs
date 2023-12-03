import { signToken } from "../utils/jwt.js";

export const loginController = async(req, res, next) => {
    const user_id = Math.random() * 100;
    const access_token = await signToken({ payload: user_id });
    return res.json({
      message: "Login Successfully",
      result: {
        access_token,
      },
    });
}