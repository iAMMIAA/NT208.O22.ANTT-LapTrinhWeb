'use strict';

const { DataTypes } = require("sequelize");
const TABLE_NAME = 'Comments';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(TABLE_NAME, {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            postId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'Posts',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            contentComment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
            }
        });

        await queryInterface.addConstraint('Comments', {
            fields: ['postId'],
            type: 'foreign key',
            name: 'fk_post_id',
            references: {
                table: 'Posts',
                field: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        });
    },
};


