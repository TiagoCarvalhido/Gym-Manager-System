
import Exercise from './Exercise.model';

import Training from './Training.model';


module.exports = (sequelize, Sequelize) => {
    const Exercise_Training = sequelize.define("Exercise_Training", {
      numberOfSets: {
        type: Sequelize.INTEGER
      },
    });
  
    Exercise.belongsToMany(Training, { through: Exercise_Training });
    Training.belongsToMany(Exercise, { through: Exercise_Training }); 


    return Training;
  };