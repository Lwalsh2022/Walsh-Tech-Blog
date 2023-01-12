const { User } = require('../models');

const userData = [
    {
        username: 'lsimpson',
        email: 'lsimpson@yahoo.com',
        password: '123xyz'
    },
    {
        username: 'lwalsh',
        email: 'lwalsh@gmail.com',
        password: '12345'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;