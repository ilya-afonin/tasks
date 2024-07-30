"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import fs from 'fs';
// import path from 'path';
const tasks_1 = __importDefault(require("./routes/tasks"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ limit: '30mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '30mb' }));
app.use((0, cors_1.default)());
app.use('/tasks/', tasks_1.default);
const CONNECTION_URL = 'mongodb+srv://ilya:testtest@cluster0.hko2j.azure.mongodb.net/app';
const PORT = process.env.PORT || 5000;
mongoose_1.default
    .connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`)))
    .catch((error) => console.log(error.message));
// app.use('/', router);*/
// fs.readdirSync(path.join(__dirname, '/pages')).forEach(file => {
//     app.get(`/${file.slice(file.indexOf('_') + 1, file.indexOf('.'))}`, (req, res) => {
//         res.type('.js')
//         res.send(express.static(path.join(__dirname, `/pages`)));
//     });
// })
//
// app.use('/', indexRouter);
