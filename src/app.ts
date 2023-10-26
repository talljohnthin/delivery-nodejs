import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

import router from "./routers";
import openapiDoc from "./swagger";
import errorHandler from "./controllers/error.controller";
import CustomError from "./utils/customError";

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

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});

app.use(errorHandler);

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
