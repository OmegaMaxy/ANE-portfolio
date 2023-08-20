import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../../util/request-handling";
//import { createDB } from "../../../lib/api/database"
import { PrismaClient } from '@prisma/client'
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
                fullname: true,
                bio_text: true,
                created_at: true,
                portfolio_banner: true,
                profile_picture: true,
                portfolio_design: {
                    select: {
                        bg_color: true,
                        secondary_color: true,
                        posts_bio_type: true,
                        show_free_footer: true,
                        show_subscribe_box: true,
                    }
                },
                posts: {
                    select: {
                        id: true,
                        title: true,
                        content: true,
                        published: true,
                        publish_date: true,
                        updated_at: true,
                        created_at: true,
                    },
                    take: 20
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