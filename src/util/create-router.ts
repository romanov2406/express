import { Router } from "express-serve-static-core";
import express from "express";

export function createRouter(): Router {
  return express.Router();
}
