const express = require('express');
const fsService = require('./fsService');

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.get('/users', async (req, res) => {
    try {
        const users = await fsService.reader()
        res.json({data: users}).status(200)
    } catch (e) {
        res.status(404).json(e.message)
    }
});

app.get('/users/:userId', async (req, res) => {
    try {
        const {userId} = req.params
        const user = [...await fsService.reader()].find(value => value.id === +userId);

        res.json({data: user}).status(200)
    } catch (e) {
        res.status(404).json(e.message)
    }
});

app.post('/users', async (req, res) => {
 try {
     const user = await req.body;
     const users = await fsService.reader()

     await fsService.writeDbJson([...users,{...user,id:Date.now()}])
     res.sendStatus(201)
 }catch (e) {
     res.status(404).json(e.message)
 }
});

app.delete('/users/:userId', async (req, res) => {
    try {
        const {userId} = req.params
        const users = [...await fsService.reader()].filter(value => value.id !== +userId);

        await fsService.writeDbJson(users)
        res.sendStatus(200)
    }catch (e) {
        res.status(404).json(e.message)
    }
});

app.put('/users/:userId', async (req, res) => {
    try {
        const {userId} = req.params
        const userReq = await req.body;
        const users = [...await fsService.reader()]
        const userDb = users.find(value => value.id === +userId);

        await fsService.writeDbJson([...users,{...userDb,...userReq}])
        res.status(201).json({data:{...userDb,...userReq}})
    }catch (e) {
        res.status(404).json(e.message)
    }
});
