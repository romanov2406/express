// import mysql from 'mysql2'
//
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'rendiak_data_base',
//     password: '24061993',
// });
//
//
// export default pool.promise()

import { Sequelize } from "sequelize";

export const SQL = new Sequelize("rendiak_data_base", "root", "24061993", {
  dialect: "mysql",
  host: "localhost",
});
