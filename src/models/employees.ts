import * as  Sequelize  from 'sequelize';
import { sequelize } from '../utils/database';
import * as express from 'express';

export const Employees = sequelize.define('employees',{
    employeeId:{
        type: Sequelize.INTEGER ,
        field:'employee_id',
        primaryKey:true
    },
    firstName:{
        type: Sequelize.STRING ,        
        field:'first_name',
        allowNull:true
    },
    lastName:{
        type: Sequelize.STRING ,        
        field:'last_name',
        allowNull:false
    },
    email:{
        type: Sequelize.STRING ,        
        field:'email',        
        allowNull:false
    },
    phoneNumber:{
        type: Sequelize.BIGINT ,        
        field:'phone_number',        
        allowNull:true
    },
    hireDate:{
        type: Sequelize.DATE ,        
        field:'hire_date',        
        allowNull:false
    },    
    jobId:{
        type: Sequelize.STRING ,        
        field:'job_id',        
        allowNull:false
    },  
    salary:{
        type: Sequelize.BIGINT ,        
        field:'salary',
        allowNull:false
    },
    commissionPct:{
        type: Sequelize.FLOAT ,        
        field:'commission_pct',        
        allowNull:true
    },  
    managerId:{
        type: Sequelize.DATE ,        
        field:'manager_id',        
        allowNull:true
    },  
    departmentId:{
        type: Sequelize.NUMBER ,        
        field:'department_id',        
        allowNull:true
    } 
});

const router = express.Router();

export const EmployeAdd = router.post('/employees',async (req:express.Request,res:express.Response)=>{
    await Employees
    .create(req.body)
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(417).send(err);
    });
});

export const EmployeFetchById = router.get('/employees/:employeeId',async (req:express.Request,res:express.Response)=>{
    const employeeId: string = req.params['employeeId'];
    
    await Employees
    .findByPk(employeeId)
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(417).send(err);
    });
});

export const EmployeFetchAll = router.get('/employees',async (req:express.Request,res:express.Response)=>{
    console.log('Employee-Fetch-All');
    const page: any = req.query['page'];
    const size: any = req.query['size'];

    const employeeList = await sequelize.query("SELECT employee_id AS employeeId,first_name as firstName,last_name as lastName,salary as salary,department_id as departmentId from employees", { type: Sequelize.QueryTypes.SELECT });
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
