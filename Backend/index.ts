import { connectDB } from "./db";
import express from "express";
import cors from "cors";
import { userRouter } from "./Router";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost8000");
});
