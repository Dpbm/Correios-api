import { parse } from 'node-html-parser';
import wrapperToGetTrackInfos from './wrapperToGetTrackInfos';
import CONF from '../conf.json';

export default function getInfosFromHTML(html:string){
    const root = parse(html);
    const ulList = root.querySelectorAll(CONF.QUERY_ELEMENT_SELECTOR);

    const trackData =  ulList.map((ul:any) => wrapperToGetTrackInfos(ul));
    trackData.splice(0, 1)
    return trackData;
}   