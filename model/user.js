const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample');
const User = mongoose.model('User', {
  username: String,
  password: String
});

module.exports = User;
