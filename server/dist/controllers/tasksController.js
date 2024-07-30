"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.createTask = exports.getTasks = void 0;
const taskMessage_1 = __importDefault(require("../models/taskMessage"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskMessage_1.default.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = req.body;
    console.log(req.body);
    const newTask = new taskMessage_1.default(task);
    try {
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createTask = createTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req', req);
    try {
        const result = yield taskMessage_1.default.deleteOne({ id: req.params.id });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Задача успешно удалена' });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
