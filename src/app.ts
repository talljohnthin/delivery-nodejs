import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

import router from "./routers";
import openapiDoc from "./swagger";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/", router());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiDoc));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(PORT, (): void => {
      console.log(`Server Running here 👉 http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
