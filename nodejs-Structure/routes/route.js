import express from "express";
import {add , edit , view , insert , update , urade} from '../controller/product.js';
var router = express.Router();

// var productControllers = productControllers();

// router.get("/",  productControllers.index);
router.get("/add",add);
router.post("/add",insert);
router.post("/update/:id",update);
router.get("/update/:id", edit);
router.get("/view", view);
router.get("/delete/:id", urade);



export {router};