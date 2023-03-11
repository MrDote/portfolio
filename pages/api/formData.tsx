import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from "../../lib/initSupabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const body = req.body;

        // console.log(body)

        const { data, error } = await supabase.from("messages").upsert(body);

        // console.log(error)
                
        if (!error) {
            res.status(200).json(data);
        } else {
            res.status(500).json(error);
        }
    }
}