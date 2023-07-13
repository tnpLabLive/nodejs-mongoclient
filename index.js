import express from "express";
import { userRouter } from "./router/UserRouter.js";
const app = express();

app.use(express.json());


app.use("/api", userRouter);



app.listen(3000, () => {
  console.log("server runing");
});
