// import "./env.js"; // load the environment variable from .env
import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import storeRouter from "./src/routes/storeRoutes.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*", // or your frontend URL in production
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api/data", storeRouter);
console.log("DATABASE_URL", process.env.DB_NAME);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
