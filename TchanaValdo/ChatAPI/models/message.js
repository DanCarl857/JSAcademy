'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    fromUserId: DataTypes.STRING,
    toUserId: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User,{
      foreignKey:'fromUserId'
    }),
    Message.belongsTo(models.User,{
      foreignKey:'toUserId'
    });
  };
  return Message;
};