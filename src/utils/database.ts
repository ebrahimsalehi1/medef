import { Sequelize } from 'sequelize';

//export const sequelize = new Sequelize({dialect:'sqlite',storage:'./obiee.db'});
//export const sequelize = new Sequelize('sqlite:./obiee.db');
export const sequelize = new Sequelize({
    host: "localhost",           
dialect: 'sqlite',           

// pool:{
//   max: 5, 
//   min: 0,
//   idle: 10000                
// },
storage: "./obiee.db"
});


