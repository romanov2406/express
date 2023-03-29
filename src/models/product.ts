import { DOUBLE, INTEGER, STRING } from "sequelize";
import { SQL } from "../util/database";

export const Product = SQL.define("product", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: STRING,
  price: {
    type: DOUBLE,
    allowNull: false,
  },
  imgUrl: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
});
