'use strict';

const Exchange = require('./test.model'); // Import model Exchange
module.exports = {
  async up(queryInterface, Sequelize) {
    // Lấy dữ liệu từ bảng exchange trong MySQL Workbench
    const exchanges = await Exchange.findAll();

    // Chèn dữ liệu vào bảng tương ứng trong migration test
    return queryInterface.bulkInsert('Exchanges', exchanges.map(exchange => ({
      id: exchange.id,
      content: exchange.content,
      likeNumber: exchange.likeNumber,
      shareNumber: exchange.shareNumber,
      createdBy: exchange.createdBy,
      createdAt: exchange.createdAt,
      updatedAt: exchange.updatedAt,
    })));
  },

  async down(queryInterface, Sequelize) {
    // Xóa toàn bộ dữ liệu trong bảng exchanges khi rollback migration
    return queryInterface.bulkDelete('exchanges', null, {});
  }
};