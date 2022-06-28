import { Request, Response } from 'express';
import { getKRList } from './controller';



export async function getAllKRs(req: Request, res: Response) {
    const repo: any = req.query['repo'];
    const KRData = await getKRList(repo);
    res.status(200).json({data: KRData});
}