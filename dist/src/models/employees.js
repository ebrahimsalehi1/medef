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
exports.EmployeFetchAll = exports.EmployeFetchById = exports.EmployeAdd = exports.Employees = void 0;
const Sequelize = require("sequelize");
const database_1 = require("../utils/database");
const express = require("express");
exports.Employees = database_1.sequelize.define('employees', {
    employeeId: {
        type: Sequelize.INTEGER,
        field: 'employee_id',
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.BIGINT,
        field: 'phone_number',
        allowNull: true
    },
    hireDate: {
        type: Sequelize.DATE,
        field: 'hire_date',
        allowNull: false
    },
    jobId: {
        type: Sequelize.STRING,
        field: 'job_id',
        allowNull: false
    },
    salary: {
        type: Sequelize.BIGINT,
        field: 'salary',
        allowNull: false
    },
    commissionPct: {
        type: Sequelize.FLOAT,
        field: 'commission_pct',
        allowNull: true
    },
    managerId: {
        type: Sequelize.DATE,
        field: 'manager_id',
        allowNull: true
    },
    departmentId: {
        type: Sequelize.NUMBER,
        field: 'department_id',
        allowNull: true
    }
});
const router = express.Router();
exports.EmployeAdd = router.post('/employees', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.Employees
        .create(req.body)
        .then(result => {
        res.status(200).send(result);
    })
        .catch(err => {
        res.status(417).send(err);
    });
}));
exports.EmployeFetchById = router.get('/employees/:employeeId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = req.params['employeeId'];
    yield exports.Employees
        .findByPk(employeeId)
        .then(result => {
        res.status(200).send(result);
    })
        .catch(err => {
        res.status(417).send(err);
    });
}));
exports.EmployeFetchAll = router.get('/employees', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Employee-Fetch-All');
    const page = req.query['page'];
    const size = req.query['size'];
    const employeeList = yield database_1.sequelize.query("SELECT employee_id AS employeeId,first_name as firstName,last_name as lastName,salary as salary,department_id as departmentId from employees", { type: Sequelize.QueryTypes.SELECT });
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
