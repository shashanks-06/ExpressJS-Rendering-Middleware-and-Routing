import { Router } from "express";
import home from "./home.js";

const router = Router();

router.get("/*", home); // "/*" -> prevents the routing interception between Express and React

export default router;
