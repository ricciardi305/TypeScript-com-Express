"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const uuid_1 = require("uuid");
const userCreateservice = ({ name, email }) => {
    const emailAlreadyExists = database_1.users.find((user) => user.email === email);
    if (emailAlreadyExists) {
        throw new Error('Email Already Exists');
    }
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        email,
    };
    database_1.users.push(newUser);
    return newUser;
};
exports.default = userCreateservice;
