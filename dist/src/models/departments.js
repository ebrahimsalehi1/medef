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
exports.DepartmentFetchAll = exports.Departments = void 0;
const Sequelize = require("sequelize");
const database_1 = require("../utils/database");
const express = require("express");
exports.Departments = database_1.sequelize.define('departments', {
    departmentId: {
        type: Sequelize.INTEGER,
        field: 'department_id',
        primaryKey: true
    },
    departmentName: {
        type: Sequelize.STRING,
        field: 'department_name',
        allowNull: true
    },
    managerId: {
        type: Sequelize.INTEGER,
        field: 'manager_id',
        allowNull: true
    },
    location_id: {
        type: Sequelize.INTEGER,
        field: 'location_id',
        allowNull: false
    }
});
const router = express.Router();
exports.DepartmentFetchAll = router.get('/departments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query['page'];
    const size = req.query['size'];
    const employeeList = yield database_1.sequelize.query("SELECT department_id as departmentId,department_name as departmentName from departments", { type: Sequelize.QueryTypes.SELECT });
    res.status(200).send(employeeList);
    // await Employees
    // .findAll()
    // .findAndCountAll({   
    //     limit: size
    // })
    // .then(result=>{
    //     res.status(200).send(result);
    // })
    // .catch(err=>{
    //     console.log(err);
    //     res.status(417).send(err);
    // });
}));
