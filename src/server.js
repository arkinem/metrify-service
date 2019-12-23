import express from "express";
import router from "./routes";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(express.json({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Service listening on port ${PORT}...`);
});

export default app;
