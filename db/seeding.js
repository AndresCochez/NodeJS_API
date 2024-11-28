const mongoose = require('mongoose');
const User = require('../models/User');

const seedUsers = async () => {
  await User.deleteMany({});
  await User.insertMany([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
  ]);
  console.log('Users seeded');
};

seedUsers().then(() => mongoose.disconnect());