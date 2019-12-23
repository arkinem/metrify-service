import express from "express";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from metrify service!");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Service listening on port ${PORT}...`);
});
