import { Express } from "express";
import express from "express";

export function initParser(app: Express): void {
  app.use(express.json())
}
