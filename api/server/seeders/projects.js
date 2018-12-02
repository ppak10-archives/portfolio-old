'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('projects', [
      {id: 1, text: 'Project #1'},
      {id: 2, text: 'Project #2'},
      {id: 3, text: 'Project #3'},
      {id: 4, text: 'Project #4'},
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('projects', null, {});
  },
};
