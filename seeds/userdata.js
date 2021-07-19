
const { User } = require('../models');

const userdata =
    [
        {
            "username": "VivaLaShre",
            "password": "password"
        },
        {
            "username": "Abner",
            "password": "password"
        },
        {
            "username": "AbnerTor",
            "password": "password"
        }
    ];

const userInfo = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = userInfo;