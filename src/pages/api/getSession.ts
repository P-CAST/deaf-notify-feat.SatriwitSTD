import { NextApiRequest, NextApiResponse } from "next";

export default async function getSession(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'GET') {
        const cookie = req.cookies
        if (cookie['session']) return res.send(true)
        else return res.send(false)
    }
}
