import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../../util/request-handling";
import { PrismaClient } from '@prisma/client'
export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    try {
        const errList = []
        check(req.query.id, 'ID is missing', errList)

        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }


        const post = await prisma.post.findFirst({
            where: {
                id: +req.query.id
            },
            select: {
                id: true,
                title: true,
                content: true,
                published: true,
                publish_date: true,
                updated_at: true,
                created_at: true,
                author: {
                    select: {
                        id: true,
                        fullname: true,
                        profile_picture: true,
                        portfolio_banner: true,
                        portfolio_design: {
                            select: {
                                id: true,
                                bg_color: true,
                                secondary_color: true,
                            }
                        }
                    }
                }
            }
        })
        await prisma.$disconnect()
        res.status(200).send({ data: { post } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(440).send({ data: { error } })
    }
}