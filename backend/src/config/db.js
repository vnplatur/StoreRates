import "../../env.js"; // load the environment variable from .env

import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "storereating",
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

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// const db = "connect"

export default db;
