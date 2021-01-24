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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTablesApi = exports.configCreate = void 0;
const express = require("express");
const client_1 = require("@prisma/client");
//import {createTables} from '../models/employees';
const router = express.Router();
const prisma = new client_1.PrismaClient();
exports.configCreate = router.post('/config', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.setHeader('Content-Type', 'application/json');
    function createNew() {
        return __awaiter(this, void 0, void 0, function* () {
            const Config = yield prisma.config.create({ data: req.body });
            res.status(200).send('OK');
            return Config;
        });
    }
    //await prisma.$connect();
    //await createNew();
    //const Config = await prisma.config.create({data:req.body});
    //res.status(200).send('OK');   
    //await prisma.$disconnect();
    createNew()
        .then(data => {
        console.log(data);
    })
        .catch(e => {
        console.log(e);
        res.status(417).send(e);
        throw e;
    })
        .finally(() => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.$disconnect();
    }));
}));
exports.createTablesApi = router.post('/createtables', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  await createTables();
    res.send("created !!!");
}));
