//Create, Read, Update, Delete
import res from "express/lib/response.js";
import WilderModel from "./../models/Wilder.js";
import { listErrors } from "./../utilities/tools.js";

// const methods = {
export default {
    create: (req, res) => {
        const { name, city, skills } = req.body;
        WilderModel.init().then(() => {
            const wilder = new WilderModel({
                name,
                city,
                skills,
            });
            wilder
                .save()
                .then((result) => {
                    res.json({ success: true, result });
                })
                .catch((err) => {
                    res.status(400).json({
                        success: false,
                        result: listErrors(err),
                    });
                });
        });
    },
    all: (req, res) => {
        WilderModel.find({ city: "Paris" })
            .then((result) => {
                res.json({ success: true, result });
            })
            .catch((err) => {
                res.json({ success: false, result: listErrors(err) });
            });
    },
    delete: (req, res, next) => {
        const { _id } = req.body;
        WilderModel.deleteOne({ _id })
            .then((result) => {
                if (result.deletedCount === 0) {
                    return res.json({
                        success: false,
                        result: "Cet identifiant n'existe pas",
                    });
                }
                res.json({
                    success: true,
                    result,
                });
            })
            .catch((err) => {
                res.json({ success: false, result: listErrors(err) });
            });
    },
};