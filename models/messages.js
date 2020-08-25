module.exports = (sequelize, DataTypes) => {
   const Message = sequelize.define('Message', {
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    timestamp: DataTypes.DATE
  })
  return Message;
};

