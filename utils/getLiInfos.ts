export default function getLiInfos(liChild:any){   
    const infos = liChild.map((li:any) => 
        li.toString()
            .replace('<li>', '')
            .replace('</li>', '')
            .replace('<b>', '')
            .replace('</b>', '')
            .split(': ') 
        
    )
    infos[1][0] =  "Data";

    const DateElements = [infos[1][1], infos[1][2]]

    infos[1][1] = DateElements.join(" ")
    infos[1].pop();
    return infos;
}