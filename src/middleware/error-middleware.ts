import { NextFunction, Request, Response } from "express";

export function TestMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log("middleware function ==>>", req.body);
  next();
}
