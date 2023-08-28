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

        check(req.query.user_id, 'user_id.invalid', errList)
        const isPostBioTypeValid = check(req.body.posts_bio_type, 'posts_bio_type.invalid', errList)
        if (isPostBioTypeValid) {
            if (!['Latest_Post', 'Short_Text'].includes(req.body.posts_bio_type)) {
                errList.push('posts_bio_type.invalid')
            }
        }


        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }

        const user = await prisma.portfolioDesign.update({
            where: {
                authorId: +req.query.user_id
            },
            data: {
                bg_color: req.body.bg_color,
                secondary_color: req.body.secondary_color,
                posts_bio_type: req.body.posts_bio_type,
                show_free_footer: req.body.show_free_footer,
                show_latest_post: req.body.show_latest_post,
                show_subscribe_box: req.body.show_subscribe_box,
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