import getJSONFromMap from "./getJSONFromMap";

export default function transformInfosArrayToJSON(infos:any){
    const JSONinfos = getJSONFromMap(infos);
    return JSONinfos;
}