import express from 'express'
import wilderController from "./../controllers/wilder.js"
import { wilderValidation } from "./../validations";


const router = express.Router()

router.post(
    "/create",
    wilderValidation.create,
    wilderController.create
); //middleWare

router.get("/all", wilderController.all);

router.delete("/delete", wilderController.delete)

export default router;