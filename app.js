const path = require('node:path');
const fs = require('node:fs/promises');

const directoryName = 'directory'
const fileName = 'file.txt'

const basePath = path.join(__dirname,'homeWork')
const createDirectoryAndFile = async () => {
    await fs.mkdir(basePath);

    try {
    for (let i = 0; i < 5; i++){
       await fs.mkdir(path.join(basePath,`${directoryName}${i}`))
       await fs.writeFile(path.join(basePath,`${directoryName}${i}`,fileName),'hello world')
    }

  const fileArray =  await fs.readdir(basePath);


    await Promise.all(fileArray.map(async (item) => {
      const stats = await fs.stat(path.join(basePath, item))
        if (stats.isDirectory()){
            console.log('is directory')
        }else {
            console.log('is file')
        }
    }))
    }catch (e) {
        console.log(e.message,'===========')
}
}
createDirectoryAndFile().finally()
