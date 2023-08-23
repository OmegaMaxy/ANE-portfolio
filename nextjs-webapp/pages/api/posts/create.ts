import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../util/request-handling";
//import { createDB } from "../../../lib/api/database"
import { PrismaClient } from '@prisma/client'
import { PublicUserSelect } from "../../../lib/api/user/selection";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    try {
        const errList = []
        check(req.body.title, 'title.invalid', errList)
        check(req.body.user_id, 'user_id.invalid', errList)

        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }

        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                authorId: req.body.user_id,
                published: req.body.published,
            },
            select: {
                id: true,
                title: true,
                author: {
                    select: {
                        id: true,
                        email: true,
                        fullname: true,
                        profile_picture: true,
                    }
                }
            }
        })
        await prisma.$disconnect()
        res.status(200).send({ data: { post } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(400).send({ data: { error } })
    }
}