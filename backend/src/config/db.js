import "../../env.js"; // load the environment variable from .env
import dotenv from "dotenv";

dotenv.config();
import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "root",
  database: process.env.MYSQLDATABASE || "storereating",
});

db.query(`
    CREATE TABLE IF NOT EXISTS stores (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      address VARCHAR(100),
      rating DECIMAL(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5)
    )
  `);
db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      address VARCHAR(100),
      password VARCHAR(100),
      role VARCHAR(100)
    )
  `);

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// const db = "connect"

export default db;
