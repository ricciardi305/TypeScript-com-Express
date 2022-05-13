"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const userListService = () => {
    return database_1.users;
};
exports.default = userListService;
