import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../util/request-handling";
import { PrismaClient } from '@prisma/client'
import getPosts from './getPosts'
import create from './create'
export default async function handle(req: NextApiRequest, res: NextApiResponse) {


    switch (req.method) {
        case 'GET':
            return await getPosts(req, res)
        case 'POST':
            return await create(req, res)
        default:
            return await getPosts(req, res)
    }
}