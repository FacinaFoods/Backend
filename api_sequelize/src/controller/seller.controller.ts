import { NextFunction, Request, Response } from "express";
import SellerService from "../services/seller.service";



export default class SellerController {
    private service = new SellerService()    

    async getAllSellers(req: Request, res: Response, next: NextFunction){
        try {
            const {status, message} = await this.service.getAllSellers()
            res.status(status).json(message)

        } catch (err) {
            next(err)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {status, message} = await this.service.login(req.body)

            res.status(status).json(message)

        } catch (err) {
            next(err)
        }
    }
}