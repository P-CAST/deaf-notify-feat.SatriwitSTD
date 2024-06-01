import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function login(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        res.setHeader('Set-Cookie', [
            serialize('session', '', {
              maxAge: -1,
              path: '/',
            }),
        ])
        res.status(200).json({ message: 'Successfully removed cookie!' })
    }
    return res.status(405)
}