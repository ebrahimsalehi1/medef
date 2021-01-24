import * as  Sequelize  from 'sequelize';
import { sequelize } from '../utils/database';
import * as express from 'express';

export const Departments = sequelize.define('departments',{
    departmentId:{
        type: Sequelize.INTEGER ,
        field:'department_id',
        primaryKey:true
    },
    departmentName:{
        type: Sequelize.STRING ,        
        field:'department_name',
        allowNull:true
    },  
    managerId:{
        type: Sequelize.INTEGER ,        
        field:'manager_id',
        allowNull:true
    },
    location_id:{
        type: Sequelize.INTEGER ,        
        field:'location_id',        
        allowNull:false
    }
});

const router = express.Router();

export const DepartmentFetchAll = router.get('/departments',async (req:express.Request,res:express.Response)=>{
    const page: any = req.query['page'];
    const size: any = req.query['size'];

    const employeeList = await sequelize.query("SELECT department_id as departmentId,department_name as departmentName from departments", { type: Sequelize.QueryTypes.SELECT });
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
});
