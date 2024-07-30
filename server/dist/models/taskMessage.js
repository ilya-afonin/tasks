"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
});
const TaskMessage = (0, mongoose_1.model)('TaskMessage', taskSchema);
exports.default = TaskMessage;
