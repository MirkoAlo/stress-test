const getFileName = (chunkId) => {
    let lastPath = [chunkId.split("/").length - 1];
    let extType = chunkId.split(".").at(1);
    let fileName = chunkId.split("/")[lastPath].replace(`.${extType}`, '');
    return fileName
}

export { getFileName } 