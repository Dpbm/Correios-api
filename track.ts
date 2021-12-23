import { Request, Response } from 'express';
import getCorreiosResponse from './utils/getCorreiosResponse';
import getInfosFromHTML from './utils/getInfosFromHTML';

export default async function trackPackage(request:Request, response:Response){
    const {codes}:any = request.body;
    let tracksInfosFromCodes:any = codes.map(async(code:string) => {
        try{
            const responseHTML = await getCorreiosResponse(code);  
            const infos = getInfosFromHTML(responseHTML);
            return infos;
        }catch(error){
            return 'error';
        }
    });

    
    tracksInfosFromCodes = await Promise.all(tracksInfosFromCodes);

    return response.status(200).json(tracksInfosFromCodes)
}
