import { Controller, Get, Post, Response } from "@decorators/express";
import * as Types from "express";
import { TestMiddleware } from "../middleware/error-middleware";

@Controller("/user", [TestMiddleware])
export class UserController {
  @Get("/:id")
  public getUser(@Response() res: Types.Response): string {
    return "User";
  }

  @Post("")
  public createUser(@Response() res: Types.Response): string {
    return "User";
  }
}
