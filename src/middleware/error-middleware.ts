import { NextFunction, Request, Response } from "express";

export function TestMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log("middelware function ==>>", req.body);

  next();
}
