import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../util/request-handling";
//import { createDB } from "../../../lib/api/database"
import { PrismaClient } from '@prisma/client'
import { encryptPassword } from "../../../util/encryption";
import { PublicUserSelect } from "../../../lib/api/user/selection";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient()

    try {
        const errList = []
        check(req.body.email, 'email.invalid', errList)
        check(req.body.fullname, 'fullname.invalid', errList)
        check(req.body.password, 'password.invalid', errList)

        if (errList.length != 0) {
            res.status(400).send({ data: { errors: errList } })
            return
        }

        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                fullname: req.body.fullname,
                password: await encryptPassword(req.body.password),
                portfolio_banner: 'https://a.postcard.page/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6bb9d4149e948647e8d03c163546db23769135d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2REdOdmJuWmxjblE2Q1hkbFluQTZGSEpsYzJsNlpWOTBiMTlzYVcxcGRGc0hhUUpBQmpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--adc320d595c48ad23efe85758b9cc431242c3c5d/chris-abney-qLW70Aoo8BE-unsplash.jpg',
                bio_text: "Hi! I'm new here, show me some love and support!"
            },
            select: PublicUserSelect
        })

        const portfolio_design = await prisma.portfolioDesign.create({
            data: {
                authorId: user.id,
            },
        })

        await prisma.$disconnect()
        res.status(200).send({ data: { user } })
    } catch (error) {
        await prisma.$disconnect()
        res.status(400).send({ data: { error } })
    }
}