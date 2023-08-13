import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../../util/request-handling";
//import { createDB } from "../../../lib/api/database"
import { PrismaClient } from '@prisma/client'
import { encryptPassword } from "../../../../util/encryption";
import { PublicUserSelect } from "../../../../lib/api/user/selection";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    try {
        const errList = []
        check(req.body.email, 'email.invalid', errList)
        check(req.body.fullname, 'fullname.invalid', errList)
        check(req.body.profile_picture, 'profile_picture.invalid', errList)
        check(req.body.portfolio_banner, 'portfolio_banner.invalid', errList)
        

        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }

        const user = await prisma.user.update({
            where: {
                id: +req.query.id
            },
            data: {
                email: req.body.email,
                fullname: req.body.fullname,
                profile_picture: req.body.profile_picture,
                portfolio_banner: req.body.portfolio_banner
            },
            select: PublicUserSelect
        })
        await prisma.$disconnect()
        res.status(200).send({ data: { user } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(440).send({ data: { error } })
    }
}