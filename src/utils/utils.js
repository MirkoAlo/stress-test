import ESI from "nodesi";
import { DOMParser } from 'xmldom'


var esi = new ESI({
    allowedHosts: ['https://www.repstatic.it']
});


export const isDev = import.meta.env.DEV;


const getFileName = (chunkId) => {
    let lastPath = [chunkId.split("/").length - 1];
    let extType = chunkId.split(".").at(1);
    let fileName = chunkId.split("/")[lastPath].replace(`.${extType}`, '');
    return fileName
}



const getEsi = async (url) => {

    const include = `<esi:include src="${url}" />`

    const esiResponse = await esi.process(include).then((result) => result);

    const response = await esiResponse;

    const html = new DOMParser().parseFromString(response, 'text/xml')

    return isDev ? html : include
}

export { getFileName, getEsi }