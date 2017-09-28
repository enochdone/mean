var config = require('./config'),
mongoose = require('mongoose');

module.exports = function(){
  var db =
mongoose.connect(config.db);
//mongoose.connect('mongodb://127.0.0.1/mean-book');

  require('../app/models/user.server.model');
  return db;
};
