module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("Exercise", {
      description: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.BLOB('long')
      }

    });
    
  
    return Exercise;
  };