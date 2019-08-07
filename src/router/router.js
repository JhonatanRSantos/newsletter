import express from "express";
import userController from "../controller/userController";

const routes = express.Router();
//home
routes.get("/", (req, res) => res.status(200).redirect("/pages/home.html"));
// User
routes.post("/create", userController.create);
routes.get("/read/:id", userController.read);
routes.post("/update/", userController.update);
routes.delete("/delete/", userController.remove);
module.exports = routes;