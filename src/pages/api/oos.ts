import { EmailTemplate } from "@/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function getSession(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        console.log(resend)
        const cookie = req.cookies
        if (cookie['session']) {
            const email = cookie['session']
            const { data, error } = await resend.emails.send({
                from: 'BTX project ja <onboarding@resend.dev>',
                to: [email],
                subject: 'live test 1',
                text: 'ye',
                headers: {
                    'X-Entity-Ref-ID': '123456789',
                  },
                // react: EmailTemplate({email}),
              });
            
              if (error) {
                return res.status(400).json(error);
              }
            
              res.status(200).json(data);
        }
    }
}
