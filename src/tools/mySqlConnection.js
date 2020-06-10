import mysql from "mysql2/promise";
require("dotenv").config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,
};

export async function mySqlConnection() {
  try {
    const pool = await mysql.createPool(dbConfig);
    return pool;
  } catch (error) {
    console.log("error");
  }
}
