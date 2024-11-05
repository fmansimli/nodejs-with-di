import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import router from "./routes";
import * as errors from "./middlewares/error";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api", router);
app.use(errors.catch404);
app.use(errors.catchError);

export default app;
