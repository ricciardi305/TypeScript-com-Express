"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userList_service_1 = __importDefault(require("../../services/users/userList.service"));
const userListController = (req, res) => {
    try {
        const users = (0, userList_service_1.default)();
        return res.send(users);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message,
            });
        }
    }
};
exports.default = userListController;
