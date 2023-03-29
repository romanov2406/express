import { Express } from "express";

export function initViews(app: Express): void {
  app.set("views", "/Users/rmnov2406/Documents/Node_js/src/views");
  app.set("view engine", "ejs");
}
