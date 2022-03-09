// const express = require("express") // ES5
import express from "express"; //ES6
import mongoose from "mongoose";
import wilderController from "./controllers/wilder.js"
import { wilderValidation } from "./validations/index.js"
import dotenv from "dotenv"

dotenv.config();

const app = express();
mongoose
    .connect(
        process.env.MONGO_URI,
        {
            autoIndex: true,
        }
    )
    .then(() => console.log("Connecté à la base de donnée"))
    .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post(
    "/api/wilder/create", 
    wilderValidation.create,
    wilderController.create
); //middleWare

app.use((req,res) =>{
    res.status(404).send("Route n'existe pas");
});

app.listen(3000, () => console.log("Serveur lancé sur le port 3000"));
