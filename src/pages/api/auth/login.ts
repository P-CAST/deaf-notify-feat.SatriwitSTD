import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function login(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        const sessionData = req.body

        const cookie = serialize('session', sessionData, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7, // One week
          path: '/',
        })
        res.setHeader('Set-Cookie', cookie)
        res.status(200).json({ message: 'Successfully set cookie!' })
    }
    return res.status(405)
}