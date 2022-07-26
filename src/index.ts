import express from 'express'
import { db } from './database/db'
import { router } from './routes'

const app = express()

app.use(router)

app.listen(4080, async () => {
  await db.sync()
  console.log('servidor rodando na porta 4080')
})
