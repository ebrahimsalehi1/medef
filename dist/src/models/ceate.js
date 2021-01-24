"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropAndCreate = void 0;
const employees_1 = require("./employees");
const departments_1 = require("./departments");
const jobs_1 = require("./jobs");
function dropAndCreate() {
    employees_1.Employees.sync();
    departments_1.Departments.sync();
    jobs_1.Jobs.sync();
    //Employees.drop();
    //Departments.drop();
    //Jobs.drop();
}
exports.dropAndCreate = dropAndCreate;
