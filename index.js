import express from "express";

import { loginController } from "./controller/user.controller.js";
import { accessTokenValidator } from "./controller/accessTokenValidator.js";
const app = express();
const port = 3003;

app.use(express.json());

const user = {
  firstname: "Huy",
  lastname: "Toàn",
};

app.post("/api/login", loginController);

app.post("/api/checklogin", accessTokenValidator);

app.listen(port, () => {
  console.log(`Your app is starting at ${port}`);
});
