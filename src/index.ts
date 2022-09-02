import express from 'express'
import { db } from './database/db'
import { router } from './Routes/UserRoutes'

const app = express()
app.use(express.json())

app.use(router)

app.listen(4080, async () => {
  await db.sync()
  console.log('servidor rodando na porta 4080')
})
