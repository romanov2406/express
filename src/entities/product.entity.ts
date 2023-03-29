import * as mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
});

export const Product = mongoose.model("products", schema);
