import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
// import fs from 'fs';
// import path from 'path';
import tasksRouter from './routes/tasks'

const app = express()

app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(bodyParser.json({ limit: '30mb' }))
app.use(cors())

app.use('/tasks/', tasksRouter)

const CONNECTION_URL =
    'mongodb+srv://ilya:testtest@cluster0.hko2j.azure.mongodb.net/app'
const PORT = process.env.PORT || 5000

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
    )
    .catch((error) => console.log(error.message))

// app.use('/', router);*/

// fs.readdirSync(path.join(__dirname, '/pages')).forEach(file => {
//     app.get(`/${file.slice(file.indexOf('_') + 1, file.indexOf('.'))}`, (req, res) => {
//         res.type('.js')
//         res.send(express.static(path.join(__dirname, `/pages`)));
//     });
// })
//
// app.use('/', indexRouter);
