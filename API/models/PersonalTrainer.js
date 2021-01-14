module.exports = (sequelize, Sequelize) => {
    const PersonalTrainer = sequelize.define("PersonalTrainer", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.FLOAT
      },
      photo: {
        type: Sequelize.BLOB('long')
      }
    
    });
  
    return PersonalTrainer;
  };