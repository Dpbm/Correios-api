import getLiInfos from "./getLiInfos";
import getParsedChild from "./getParsedChild";
import getUlChild from "./getUlChild";
import transformInfosArrayToJSON from "./transformInfosArrayToJSON";

export default function wrapperToGetTrackInfos(ul:any){
    const child = getUlChild(ul);
    const parsedChild = getParsedChild(child);
    const infos = getLiInfos(parsedChild);
    let JSONinfos = transformInfosArrayToJSON(infos);
    return  JSONinfos;
}