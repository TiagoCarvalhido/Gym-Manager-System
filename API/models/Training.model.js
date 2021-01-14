
import Client from './Client.model';

import PersonalTrainer from './PersonalTrainer';


module.exports = (sequelize, Sequelize) => {
    const Training = sequelize.define("Training", {
      date: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT
      },
      isDone: {
        type: Sequelize.BOOLEAN
      },
      idCliente: {
            type: Sequelize.INTEGER,
            model: 'Cliente', 
            key: 'id', 
      },
      idPersonalTrainer: {
            type: Sequelize.INTEGER,
            model: 'PersonalTrainer', 
            key: 'id',
       
      }
    
    });
  
    Client.hasMany(Training);

    PersonalTrainer.hasMany(Training);


    return Training;
  };