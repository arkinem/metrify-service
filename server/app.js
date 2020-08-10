import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import router from "./routes/router";

let app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

export default app;
