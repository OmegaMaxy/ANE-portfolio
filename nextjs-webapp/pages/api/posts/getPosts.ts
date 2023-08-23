import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../util/request-handling";
import { PrismaClient } from '@prisma/client'
export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    try {
        const errList = []

        check(req.query.user_id, 'User ID is missing', errList)
        // req.query.type is not required
        // req.query.order is not required
        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }

        const filter_type = req.query.type
        const filter_order = req.query.order

        let where = {
            author: {
                id: +req.query.user_id
            },
        }
        let orderBy = {
            
        }
        if (filter_type) {
            if (filter_type === 'draft') {
                where['published'] = false
            }
            if (filter_type === 'published') {
                where['published'] = true
            }
        }
        if (filter_order) {
            if (filter_order === 'newest') {
                orderBy['created_at'] = 'desc'
            }
            if (filter_type === 'oldest') {
                orderBy['created_at'] = 'asc'
            }
            if (filter_type === 'recent') {
                orderBy['updated_at'] = 'desc'
            }
        }


        const posts = await prisma.post.findMany({
            where,
            orderBy,
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
                    }
                }
            }
        })
        await prisma.$disconnect()
        res.status(200).send({ data: { posts } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(400).send({ data: { error } })
    }
}