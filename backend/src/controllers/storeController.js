import {
  getAll,
  getById,
  addStores,
  updateStores,
  deleteStores,
} from "../models/storeModel.js";

export const getAllStores = (req, res) => {
  getAll((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).send(result);
  });
};
export const getStoresById = (req, res) => {
  const id = req.params.id;
  getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).send(result);
  });
};
export const addStore = (req, res) => {
  const { name, email, address } = req.body;
  addStores(name, email, address, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).send("Store Data is added successfully");
  });
};
export const updateStore = (req, res) => {
  const { name, email, address } = req.body;
  const id = req.params.id;
  updateStores(name, email, address, id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).send(result);
  });
};
export const deleteStore = (req, res) => {
  const id = req.params.id;
  deleteStores(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json("Store data is deleted successfully");
  });
};
