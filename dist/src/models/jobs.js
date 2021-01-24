"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobs = void 0;
const Sequelize = require("sequelize");
const database_1 = require("../utils/database");
exports.Jobs = database_1.sequelize.define('jobs', {
    jobId: {
        type: Sequelize.STRING,
        field: 'job_id',
        primaryKey: true
    },
    jobTitle: {
        type: Sequelize.STRING,
        field: 'job_title',
        allowNull: true
    },
    minSalary: {
        type: Sequelize.INTEGER,
        field: 'min_salary',
        allowNull: false
    },
    maxSalary: {
        type: Sequelize.INTEGER,
        field: 'max_salary',
        allowNull: false
    }
});
