import express from "express";
import { getAllStores, getStoresById, addStore, updateStore, deleteStore } from "../controllers/storeController.js";

const storeRouter = express.Router();

storeRouter.get("/",getAllStores);
storeRouter.get("/:id",getStoresById);
storeRouter.post("/",addStore);
storeRouter.put("/:id",updateStore);
storeRouter.delete("/:id",deleteStore);

export default storeRouter;