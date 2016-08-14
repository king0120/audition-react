var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuditionSchema = new Schema({
  title: String,
  theater: String,
  date: Date,
  description: String
});

module.exports = mongoose.model('Audition', AuditionSchema);