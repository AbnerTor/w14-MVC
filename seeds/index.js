
const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedPost = require('./postData');

const plantSeeds = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedPost();

    process.exit(0);
};

plantSeeds();