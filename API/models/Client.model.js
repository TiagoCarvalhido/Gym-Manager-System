module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("Cliente", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      initialWeight: {
        type: Sequelize.FLOAT
      },
      
      currentlWeight: {
        type: Sequelize.FLOAT
      },

      monthlyPayed: {
        type: Sequelize.BOOLEAN
      },
      photo: {
        type: Sequelize.BLOB('long')
      }
    });
  
    return Client;
  };