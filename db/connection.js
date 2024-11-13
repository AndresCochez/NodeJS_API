const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

module.exports = mongoose;