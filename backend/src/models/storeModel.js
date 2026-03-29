import db from "../config/db.js";

export const getAll = (callback) => {
  db.query("SELECT * FROM stores", callback);
};

export const getById = (id, callback) => {
  db.query("SELECT * FROM stores WHERE id = ?", [id], callback);
};

export const addStores = (name, email, address, callback) => {
  db.query(
    "INSERT INTO stores (name, email, address) VALUES (?,?,?)",
    [name, email, address],
    callback,
  );
};

export const updateStores = (name, email, address, id, callback) => {
  db.query(
    "UPDATE stores (name, email, address) VALUES (?,?,?) WHERE id = ?"[
      (name, email, address, id)
    ],
    callback,
  );
};

export const deleteStores = (id, callback) => {
  db.query("DELETE FROM stores WHERE id = ?", [id], callback);
};
