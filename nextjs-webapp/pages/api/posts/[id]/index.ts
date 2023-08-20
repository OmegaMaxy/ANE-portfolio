import { NextApiRequest, NextApiResponse } from "next";
import { check } from "../../../../util/request-handling";
import { PrismaClient } from '@prisma/client'
import get from './get'
import update from './update'
export default async function handle(req: NextApiRequest, res: NextApiResponse) {


    switch (req.method) {
        case 'GET':
            return await get(req, res)
        case 'PATCH':
            return await update(req, res)
        default:
            return await get(req, res)
    }
}