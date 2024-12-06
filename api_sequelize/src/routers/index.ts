import { Router } from "express";
import sellerRouter from "./sellerRouter";


const router = Router()

router.use(sellerRouter)

export default  router