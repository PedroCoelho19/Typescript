import express, {Request, Response } from 'express'

const app = express();

app.get ('/' , (req:Request, res: Response) => {
    res.json({
        msg: "ok"
    })
})
app.listen(4080, () => console.log('Servidor iniciado a porta 4080'))