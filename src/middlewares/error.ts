import type { ErrorRequestHandler, RequestHandler } from "express";
import { CustomError } from "../errors/custom-error";
import { join } from "path";

export const catch404: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).sendFile(join(process.cwd(), "dist/public/index.html"));
  } catch (error) {
    next(error);
  }
};

export const catchError: ErrorRequestHandler = (err, req, res, _next) => {
  try {
    if (err instanceof CustomError) {
      res.status(err.httpCode).json(err.serialize());
    } else {
      res.status(500).json({
        httpCode: 500,
        message: "something went wrong",
        errors: err
      });
    }
  } catch (error) {
    res.status(500).json({
      httpCode: 500,
      message: "unknown error"
    });
  } finally {
    console.log(err);
  }
};
