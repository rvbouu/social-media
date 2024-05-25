const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const mongoose = require('mongoose');

const users = [
  {
    username: 'lifeofbou',
    email: 'lifeofbou@gmail.com',
    thought: []
  },
  {
    username: 'rvbou',
    email: 'rvbouu@gmail.com',
    thought: []
  }
];

console.log(connection);

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    await User.deleteMany({})

    await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
