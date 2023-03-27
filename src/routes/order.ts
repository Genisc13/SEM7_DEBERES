import { Router } from "express";
import { getSubjects } from "../controllers/order";
import { checkJwt, checkJwtAdmin } from "../middleware/session";
/**
 * Esta ruta solo puede acceder las personas que tienen session activa!
 * que tenga un JWT valido!
 */
const router = Router();

//router.get('/', checkJwt, getSubjects);
router.get("/",checkJwtAdmin,getSubjects);

export { router };