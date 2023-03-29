import { Express } from "express";
import * as _app_config from "./index";

export function bootstrapApp(app: Express): void {
  Object.values(_app_config).forEach((configFn: Function) => configFn(app));
}
