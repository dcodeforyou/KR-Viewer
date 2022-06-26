import { Request, Response } from 'express';
import { getKRList } from './controller';



export async function getAllKRs(req: Request, res: Response) {
    const KRData = await getKRList();
    res.status(200).json({data: KRData});
}