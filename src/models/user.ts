import { INTEGER, STRING } from "sequelize";
import { SQL } from "../util/database";

export const User = SQL.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: STRING,
  email: STRING,
});
