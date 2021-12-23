import { parse } from 'node-html-parser';

export default function getParsedChild(child:any){
    const root = parse(child);
    return root.querySelectorAll('li');
}