import mongoose from "mongoose";
import mail from "../tools/mail";

const user = mongoose.model("user");
const mailer = new mail();

const create = async (req, res) => {
    try {
        await user.create(req.body);
        mailer.send(req.body.email, "Welcome", "Accout created with success!");
        return res.sendStatus(201);
    } catch(error) {        
        return res.status(409).send({ error : "E-mail already registed" });
    }    
}
const read = async (req, res) => {
    try {
        const cUser = await user.findById(req.params.id);        
        return res.status(200).send(cUser);
    } catch (error) {
        return res.sendStatus(404);
    }
}
const update = async (req, res) => {
    try {
        const { email, update } = req.body;
        await user.findOneAndUpdate(email, update);
        return res.sendStatus(200);
    } catch (error) {        
        return res.status(404).send({ erro : "User not found."});
    }
}
const remove = async (req, res) => {
    try {
        await user.findOneAndDelete(req.body);
        return res.sendStatus(200);
    } catch (error) {        
        return res.status(404).send({ erro : "User not found."});
    }
}
module.exports = {
    create, read, update, remove
}