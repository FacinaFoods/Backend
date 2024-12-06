import { ModelStatic } from "sequelize";
import Sellers from "../database/models/Sellers";
import { BodyLogin } from "../utils/seller.model";
import md5 from "md5";
import { resp, respMsg } from "../helpers/resp";
import { sign } from "../jwt/jwt";


export default class SellerService {
    private model: ModelStatic<Sellers> = Sellers

    async getAllSellers() {
        const sellers = await this.model.findAll()
        return resp(200, sellers)
    }

    async login(body: BodyLogin){
        const hashPass = md5(body.password)

        const user = await this.model.findOne({where: {
            email: body.email,
            password: hashPass
        }})

        if(!user) return respMsg(404, "Email or password invalid!")

        const { id, name, level, email } = user
        const token = sign({ id, name, email, level })
        return resp(200, { id, name, email, level, token })
    }
}

