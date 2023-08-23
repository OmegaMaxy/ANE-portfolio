import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../util/request-handling";
//import { createDB } from "../../../lib/api/database"
import { PrismaClient } from '@prisma/client'
import { encryptPassword } from "../../../util/encryption";
import { PublicUserSelect } from "../../../lib/api/user/selection";
import moment from "moment";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    const date = moment().subtract(10 ,"days").toISOString()
    try {

        const users = await prisma.user.findMany({
            where: {
                created_at: {
                    gt: date,
                }
            },
            take: 15,
            select: PublicUserSelect
        })


        await prisma.$disconnect()
        res.status(200).send({ data: { users } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(500).send({ data: { error } })
    }
}