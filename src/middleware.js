import { fileURLToPath } from "url";
import { JSDOM } from 'jsdom';
import path, { dirname } from "path";
import { getFileName } from '../src/utils/utils'

// import ESI from 'esi'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(ESI)


function writeFile(obj) {

  let root = `${path.resolve(__dirname)}/css/`;
  let assetNameRoot = `${root}/${obj.assetName}`;

  if (!fs.existsSync(root)) {    //check if folder already exists
    fs.mkdirSync(root);    //creating folder
  }

  if (!fs.existsSync(assetNameRoot)) {
    fs.mkdirSync(assetNameRoot);
  }

  fs.writeFileSync(`${assetNameRoot}/${obj.assetName}.css`, obj.style, 'utf-8', function (err) {
    if (err) throw err;
    console.log('filelistAsync complete');
  });
}

function getStyle(response, context) {

  const dom = new JSDOM(response);
  const document = dom.window.document;

  let pageStyleTag = document.querySelector('style');

  if (pageStyleTag) {
    let pageStyle = pageStyleTag.textContent;

    let fileName = getFileName(context.url.pathname)

    let regexp = new RegExp(/<style[\w="'\s-]*>(.*?)<\/\s*style>/g);

    let obj = {
      assetName: fileName.length != '0' ? fileName : 'index',
      style: pageStyle
    };

    writeFile(obj);

    let styleRoot = `../css/${obj.assetName}/${obj.assetName}.css`;

    let stylesheet = `<link rel="stylesheet" type="text/css" href="${styleRoot}" />`;

    return response.replace(/<style\b[^<>]*>[\s\S]*?<\/style\s*>/gi, stylesheet);
  } else {
    return response
  }
}

export const onRequest = async (context, next) => {
  // aspetto il risultato
  const response = await next();

  if (!context.url.pathname.includes('include')) {
    return new Response(
      response.text ?
        process.env.NODE_ENV != 'development' ? getStyle(await response.text(), context) : await response.text()
        : response.body, response
    );
  }

  return new Response(
    response.text ?
      (await response.text()).replace('<!DOCTYPE html>', '')
      : response.body, response
  );
};