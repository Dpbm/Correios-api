export default function getJSONFromMap(info:any){
    const infosToMap = new Map(info);
    return Object.fromEntries(infosToMap);
}