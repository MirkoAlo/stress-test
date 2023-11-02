import { fileURLToPath } from "url";
import { JSDOM } from 'jsdom'
const __filename = fileURLToPath(import.meta.url);
import path, { dirname } from "path";

const __dirname = dirname(__filename);





function writeFile(obj) {

    let root = `${path.resolve(__dirname)}/css/`;
    let assetNameRoot = `${root}/${obj.assetName}`;


    if (!fs.existsSync(root)) {    //check if folder already exists
        fs.mkdirSync(root);    //creating folder
    }

    if (!fs.existsSync(root)) {    //check if folder already exists
        fs.mkdirSync(root);    //creating folder
    }

    fs.writeFileSync(`${root}/${obj.assetName}.css`, obj.style, 'utf-8', function (err) {
        if (err) throw err;
        console.log('filelistAsync complete');
    });
}

function getStyle(res, context) {

    const dom = new JSDOM(res);
    const document = dom.window.document;


    let pageStyleTag = document.querySelector('style');

    let pageStyle = pageStyleTag.textContent

    console.log()

    let lastPath = [context.url.pathname.split("/").length - 1];
    let extType = context.url.pathname.split(".").at(1);
    let fileName = context.url.pathname.split("/")[lastPath].replace(`.${extType}`, '');

    let regexp = new RegExp(/<style[\w="'\s-]*>(.*?)<\/\s*style>/g)


    let obj = {
        assetName: fileName.length != '0' ? fileName : 'index',
        style: pageStyle
    }

    writeFile(obj)

    let styleRoot = `../css/${obj.assetName}/${obj.assetName}.css`

    let stylesheet = `<link rel="stylesheet" type="text/css" href="${styleRoot}" />`

    return res.replace(/<style\b[^<>]*>[\s\S]*?<\/style\s*>/gi, stylesheet)

}

export const onRequest = async (context, next) => {
    // aspetto il risultato
    const response = await next()

    if (!context.url.pathname.includes('include')) {
        return new Response(
            response.text ?
                process.env.NODE_ENV != 'development' ? getStyle(await response.text(), context) : await response.text()
                : response.body, response
        )
    }

    return new Response(
        response.text ?
            (await response.text()).replace('<!DOCTYPE html>', '')
            : response.body, response
    )
};