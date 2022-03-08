//Create, Read, Update, Delete
import WilderModel from "./../models/Wilder.js";
import { listErrors } from "./../utilities/tools.js";

// const methods = {
export default {
    create: (req, res, next) => {
        //post
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
};

// export default methods;

//Create, Read, Update, Delete