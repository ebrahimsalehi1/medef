"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
//export const sequelize = new Sequelize({dialect:'sqlite',storage:'./obiee.db'});
//export const sequelize = new Sequelize('sqlite:./obiee.db');
exports.sequelize = new sequelize_1.Sequelize({
    host: "localhost",
    dialect: 'sqlite',
    // pool:{
    //   max: 5, 
    //   min: 0,
    //   idle: 10000                
    // },
    storage: "./obiee.db"
});
