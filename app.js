const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os')

const foo = async () =>{

    try {

        const directory = ['directory','directory1','directory2','directory3','directory4'];
        const files = ['file.txt',"file1.txt","file2.txt","file3.txt","file4.txt"];

        const promise = directory.map( async (value, index)=>{

            await fs.mkdir(path.join(process.cwd(),value),{recursive:true});
            await fs.writeFile(path.join(process.cwd(),value,files[index]),'hello world');

        })

        const result = await fs.readdir(path.join(process.cwd()))

        for (const item of result) {
            const stats = await fs.stat(path.join(process.cwd(),item))
            const isFile = stats.isFile()
            if (isFile){
                console.log('is file' , path.join(process.cwd(),item))
            }else {
                console.log('is directory',path.join(process.cwd(),item))
            }
        }

    }catch (e) {
        console.error(e.message)
    }

}

foo().then()
