import * as  Sequelize  from 'sequelize';
import { sequelize } from '../utils/database';
import * as express from 'express';

export const Jobs = sequelize.define('jobs',{
    jobId:{
        type: Sequelize.STRING ,
        field:'job_id',
        primaryKey:true
    },
    jobTitle:{
        type: Sequelize.STRING ,        
        field:'job_title',
        allowNull:true
    },
    minSalary:{
        type: Sequelize.INTEGER ,        
        field:'min_salary',
        allowNull:false
    },
    maxSalary:{
        type: Sequelize.INTEGER ,        
        field:'max_salary',        
        allowNull:false
    }
});
