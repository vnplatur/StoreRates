import db from "../config/db.js";

// find user by email
export const findUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};

// create new user
export const createUser = (name, email,address,role, password, callback) => {
  db.query(
    "INSERT INTO users (name, email,address,role, password) VALUES (?, ?,?, ?, ?)",
    [name, email,address,role, password],
    callback
  );
};
