import axios from "axios";
import CONF from '../conf.json';


export default async function getCorreiosResponse(trackNumber:string){
    const response = await axios.get(`${CONF.CORREIOS_BASE_URL}${trackNumber}`);
    return response.data;
}