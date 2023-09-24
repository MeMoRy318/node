const path = require('node:path');
const fs = require('node:fs/promises');

const pathDbJson = path.join(process.cwd(),'db.json')

const reader =  async () =>{
   const users  = await fs.readFile(pathDbJson,{encoding:"utf-8"})
    return JSON.parse(users)
}

const writeDbJson = async (users) => {
    const usersArray = JSON.stringify(users);
    await fs.writeFile(pathDbJson,usersArray)
}

module.exports = {
    reader,
    writeDbJson
}
