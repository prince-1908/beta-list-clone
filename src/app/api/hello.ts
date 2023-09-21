import { NextApiRequest, NextApiResponse } from "next";

export default async function hello(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({msg: "hello api"});
}