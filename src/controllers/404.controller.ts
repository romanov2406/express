import { Controller, Get, Response } from "@decorators/express";
import * as Types from "express";

@Controller("/favicon.ico")
export class NotFoundController {
  @Get("/")
  public notFoundRoute(@Response() response: Types.Response): void {
    response.end();
  }
}
