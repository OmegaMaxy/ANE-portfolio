import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../../util/request-handling";
//import { createDB } from "../../../lib/api/database"
import { PrismaClient } from '@prisma/client'
import { PublicUserSelectWithLatestPost } from '../../../../lib/api/user/selection'
export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    try {
        const errList = []
        check(req.query.id, 'User ID is missing', errList)

        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }


        const user = await prisma.user.findFirst({
            where: {
                id: +req.query.id
            },
            select: {
                id: true,
                email: true,
                fullname: true,
                profile_picture: true,
                bio_text: true,
                portfolio_banner: true,
                password: false,
                posts: {
                    orderBy: { publish_date: 'desc' },
                    take: 1
                }
            }
        })
        await prisma.$disconnect()
        res.status(200).send({ data: { user } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(440).send({ data: { error } })
    }
}