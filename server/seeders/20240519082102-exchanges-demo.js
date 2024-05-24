'use strict';
const { fakerVI} = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let records = [];
    for (let i = 0; i < 20; i++) {
      records.push({
        id: fakerVI.string.uuid(),
        content: fakerVI.lorem.text(),
        likeNumber: fakerVI.number.int(100),
        shareNumber: fakerVI.number.int(100),
        createdBy: 1,
        createdAt: fakerVI.date.recent(),
        updatedAt: fakerVI.date.recent(),
      });
    }

    await queryInterface.bulkInsert('Exchanges', records);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
