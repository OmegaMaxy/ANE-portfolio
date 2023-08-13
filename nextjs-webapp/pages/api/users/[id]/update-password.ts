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
        check(req.body.password, 'password.invalid', errList)

        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }

        const user = await prisma.user.update({
            where: {
                id: +req.query.id
            },
            data: {
                password: await encryptPassword(req.body.password)
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