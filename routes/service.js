import express from "express";
const router = express.Router();
import ServicesController from "../controller/ServicesController.js";
var services = new ServicesController();
router.get("/", services.index);

router.get("/test", services.test);

router.post('/divisas', services.divisa );

router.post('/interes', services.interes);
export default router;
