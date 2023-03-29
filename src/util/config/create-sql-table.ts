import { Express } from "express";
import { SQL } from "../database";
import { Sequelize } from "sequelize";
import { Product } from "../../models/product";
import { User } from "../../models/user";

export function createSqlTable(app: Express): void {
  Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
  User.hasMany(Product);

  SQL.sync()
    .then((response: Sequelize) => {
      console.log("APP listen port 3000 ....");
      app.listen(3000);
    })
    .catch((error) => console.error("SQL Doesent Connect =>", error));
}
