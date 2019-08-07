import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import requireDir from "require-dir";
import path from "path";

const app = express();

dotenv.config();
mongoose.connect(process.env.DB_URL, { useNewUrlParser : true , useCreateIndex: true, useFindAndModify : false});
requireDir("./models/");

app.use(express.json());
app.use("/pages", express.static(path.join(__dirname, "views")));
app.use("/", require("./router/router"));
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);    
});