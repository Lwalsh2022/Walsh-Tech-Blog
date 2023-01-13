const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Comment extends Model {}

// this is the same as the User model, but with a few changes

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,     // value at creation will be current datetime
        },
        user_id: {
            type: DataTypes.INTEGER,         // this is a foreign key which references User.id
            references: {
                model: 'user',
                key: 'id'
            }
        },
        blogpost_id: {                       // this is a foreign key which references Blogpost.id
            type: DataTypes.INTEGER,
            references: {
                model: 'blogpost',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;