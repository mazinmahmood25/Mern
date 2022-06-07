import express from "express";
import {add , edit , view} from '../controller/product.js';
var router = express.Router();

// var productControllers = productControllers();

// router.get("/",  productControllers.index);
router.get("/add",add);
router.get("/edit", edit);
router.get("/view", view);


export {router};