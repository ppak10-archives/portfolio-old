'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todos', [
      {id: 1, text: 'Do the dishes and stuff'},
      {id: 2, text: 'connect to database'},
      {id: 3, text: 'do more stuff'},
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todos', null, {});
  },
};
