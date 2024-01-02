"use strict";

const fs = require("fs");

let data = JSON.parse(fs.readFileSync("./data/authors.json", "utf-8")).map(
  (user) => {
    delete user.id;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return user;
  }
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Authors", data);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Authors", data);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
