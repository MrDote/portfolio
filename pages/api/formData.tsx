import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data } = req.body;
  
    // Then save the post data to a database
    res.status(200).json({ message: `Post created successfully: ${data}` });
}