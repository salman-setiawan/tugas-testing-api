'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Todos', [
      {
        nameTodo: "Tugas mysqlbasic",
        descTodo: "Mengerjakan tugas mysqlbasic",
        categoryTodo: "Skilvul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nameTodo: "Tugas mysqllanjutan",
        descTodo: "Mengerjakan tugasmy sql lanjutan",
        categoryTodo: "Skilvul",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
