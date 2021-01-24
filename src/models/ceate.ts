import {Employees} from './employees';
import {Departments} from './departments';
import {Jobs} from './jobs';

export function dropAndCreate(){
    Employees.sync();
    Departments.sync();
    Jobs.sync();

    //Employees.drop();
    //Departments.drop();
    //Jobs.drop();
}
