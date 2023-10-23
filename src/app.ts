import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import router from "./routers";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/", router());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(PORT, (): void => {
      console.log(`Server Running here 👉 https://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
