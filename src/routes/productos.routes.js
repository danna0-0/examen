import { Router } from "express";
export {default as productosRoutes} from "./productos.routes.js";

import {getAllproducts} from "../productoscontroller.js"

const router = Router();

//obtener los productos del CRUD
router.get('/all' , getAllproducts);

export default router;