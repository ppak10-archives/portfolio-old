'use strict';

module.exports = function(sequelize, DataTypes) {
  const project = sequelize.define('project', {
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
  return project;
};
