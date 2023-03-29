import { Express } from "express";
import * as _controllers from "../../controllers/index";
import { attachControllers } from "@decorators/express";

export function initControllers(app: Express): void {
  const controllersArray = Object.values(_controllers);
  void attachControllers(app, controllersArray);
}
