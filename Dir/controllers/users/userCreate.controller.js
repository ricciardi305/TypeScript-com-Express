"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userCreate_service_1 = __importDefault(require("../../services/users/userCreate.service"));
const userCreateController = (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = (0, userCreate_service_1.default)({ name, email });
        return res.status(400).send(newUser);
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
exports.default = userCreateController;
