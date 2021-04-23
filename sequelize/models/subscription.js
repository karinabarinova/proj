'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subscription.init({
    subscriptionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    promoCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};